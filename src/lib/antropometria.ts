export type Sexo = 'M' | 'F';

export type Dobras = {
  peitoral: number;
  axilarMedia: number;
  triceps: number;
  subescapular: number;
  abdominal: number;
  suprailiaca: number;
  coxa: number;
};

export type ResultadoPollock = { pct: number; soma: number } | null;

// Pollock 7 dobras — Jackson & Pollock (1978) para homens,
// Jackson, Pollock & Ward (1980) para mulheres. Conversão de densidade
// para percentual de gordura pela equação de Siri.
export function calcGorduraPollock7(
  dobras: Partial<Dobras>,
  idade: number,
  sexo: Sexo
): ResultadoPollock {
  const {
    peitoral = 0,
    axilarMedia = 0,
    triceps = 0,
    subescapular = 0,
    abdominal = 0,
    suprailiaca = 0,
    coxa = 0,
  } = dobras;

  const soma =
    peitoral + axilarMedia + triceps + subescapular + abdominal + suprailiaca + coxa;

  if (soma <= 0) return null;

  let density: number;
  if (sexo === 'F') {
    density =
      1.097 - 0.00046971 * soma + 0.00000056 * soma * soma - 0.00012828 * idade;
  } else {
    density =
      1.112 - 0.00043499 * soma + 0.00000055 * soma * soma - 0.00028826 * idade;
  }

  const pct = (4.95 / density - 4.5) * 100; // Siri

  return {
    pct: Math.max(0, Math.round(pct * 10) / 10),
    soma: Math.round(soma * 10) / 10,
  };
}

export type Classificacao = { label: string; level: 'low' | 'mid' | 'high' };

// Classificação de percentual de gordura por sexo e faixa etária (ACSM).
export function classGordura(pct: number, sexo: Sexo, idade: number): Classificacao {
  const tabelaF = [
    { maxIdade: 29, essential: 12, atletico: 20, adequado: 28, acima: 32 },
    { maxIdade: 39, essential: 12, atletico: 21, adequado: 29, acima: 33 },
    { maxIdade: 49, essential: 12, atletico: 22, adequado: 31, acima: 35 },
    { maxIdade: 59, essential: 12, atletico: 23, adequado: 33, acima: 36 },
    { maxIdade: 999, essential: 12, atletico: 24, adequado: 35, acima: 38 },
  ];
  const tabelaM = [
    { maxIdade: 29, essential: 3, atletico: 11, adequado: 18, acima: 22 },
    { maxIdade: 39, essential: 3, atletico: 13, adequado: 20, acima: 24 },
    { maxIdade: 49, essential: 3, atletico: 15, adequado: 22, acima: 26 },
    { maxIdade: 59, essential: 3, atletico: 17, adequado: 24, acima: 28 },
    { maxIdade: 999, essential: 3, atletico: 19, adequado: 26, acima: 30 },
  ];

  const tabela = sexo === 'F' ? tabelaF : tabelaM;
  const faixa = tabela.find((t) => idade <= t.maxIdade) ?? tabela[tabela.length - 1];

  if (pct < faixa.essential) return { label: 'Abaixo do essencial', level: 'low' };
  if (pct < faixa.atletico) return { label: 'Atlético', level: 'high' };
  if (pct < faixa.adequado) return { label: 'Adequado', level: 'high' };
  if (pct < faixa.acima) return { label: 'Acima', level: 'mid' };
  return { label: 'Obesidade', level: 'low' };
}

export type ClassificacaoIMC = { label: string; level: 'low' | 'mid' | 'high'; desc: string };

// Classificação de IMC ajustada por faixa etária.
// Adolescentes (<18) e idosos (60+) usam referências próprias; em idosos,
// o critério de Lipschitz desloca a faixa adequada para 22 a 27.
export function classIMC(imc: number, idade?: number): ClassificacaoIMC {
  if (idade && idade < 18) {
    if (imc < 14) return { label: 'Muito baixo peso', level: 'low', desc: 'IMC muito abaixo do esperado para a idade' };
    if (imc < 18) return { label: 'Baixo peso', level: 'mid', desc: 'IMC abaixo do esperado para adolescentes' };
    if (imc < 25) return { label: 'Peso adequado', level: 'high', desc: 'IMC adequado para a faixa etária' };
    if (imc < 30) return { label: 'Sobrepeso', level: 'mid', desc: 'IMC elevado para adolescentes' };
    return { label: 'Obesidade', level: 'low', desc: 'IMC muito elevado para adolescentes' };
  }

  if (!idade || idade < 60) {
    if (imc < 18.5) return { label: 'Baixo peso', level: 'mid', desc: 'IMC abaixo de 18,5' };
    if (imc < 25) return { label: 'Normal', level: 'high', desc: 'IMC entre 18,5 e 24,9' };
    if (imc < 30) return { label: 'Sobrepeso', level: 'mid', desc: 'IMC entre 25 e 29,9' };
    if (imc < 35) return { label: 'Obesidade I', level: 'low', desc: 'IMC entre 30 e 34,9' };
    if (imc < 40) return { label: 'Obesidade II', level: 'low', desc: 'IMC entre 35 e 39,9' };
    return { label: 'Obesidade III', level: 'low', desc: 'IMC maior ou igual a 40' };
  }

  if (imc < 22) return { label: 'Baixo peso', level: 'mid', desc: 'IMC abaixo de 22 (risco nutricional em idosos)' };
  if (imc < 27) return { label: 'Normal', level: 'high', desc: 'IMC entre 22 e 27 (adequado para idosos)' };
  if (imc < 30) return { label: 'Sobrepeso', level: 'mid', desc: 'IMC entre 27 e 29,9' };
  if (imc < 35) return { label: 'Obesidade I', level: 'low', desc: 'IMC entre 30 e 34,9' };
  if (imc < 40) return { label: 'Obesidade II', level: 'low', desc: 'IMC entre 35 e 39,9' };
  return { label: 'Obesidade III', level: 'low', desc: 'IMC maior ou igual a 40' };
}
