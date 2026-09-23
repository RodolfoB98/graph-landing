import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { classIMC } from '../lib/antropometria';

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');

  const pesoNum = parseFloat(peso.replace(',', '.'));
  const alturaCm = parseFloat(altura.replace(',', '.'));
  const alturaM = alturaCm / 100;
  const idadeNum = idade ? parseFloat(idade.replace(',', '.')) : undefined;

  const imc =
    pesoNum > 0 && alturaM > 0 ? pesoNum / (alturaM * alturaM) : null;

  const classificacao = imc !== null && isFinite(imc) ? classIMC(imc, idadeNum) : null;

  return (
    <>
      <Navbar />
      <main className="calc-page">
        <section className="calc-hero">
          <div className="container">
            <h1>Calculadora de IMC com classificação por faixa etária</h1>
            <p className="calc-hero-subtitle">
              Uma ferramenta de triagem, não de diagnóstico. Informe peso, altura e, se quiser, a
              idade do paciente para ver a classificação ajustada por faixa etária.
            </p>
          </div>
        </section>

        <section className="calc-tool">
          <div className="container calc-tool-container">
            <div className="calc-field">
              <label htmlFor="peso">Peso do paciente (kg)</label>
              <input
                id="peso"
                type="number"
                inputMode="decimal"
                placeholder="Ex: 70"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="calc-input"
              />
            </div>
            <div className="calc-field">
              <label htmlFor="altura">Altura do paciente (cm)</label>
              <input
                id="altura"
                type="number"
                inputMode="decimal"
                placeholder="Ex: 169"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="calc-input"
              />
            </div>
            <div className="calc-field">
              <label htmlFor="idade">Idade do paciente (anos, opcional)</label>
              <input
                id="idade"
                type="number"
                inputMode="decimal"
                placeholder="Ex: 35"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                className="calc-input"
              />
            </div>

            <div className="calc-result">
              {imc !== null && isFinite(imc) && classificacao ? (
                <>
                  <span className="calc-result-value">{imc.toFixed(1)}</span>
                  <span className="calc-result-label">{classificacao.label}</span>
                </>
              ) : (
                <span className="calc-result-placeholder">Preencha peso e altura para calcular</span>
              )}
            </div>
          </div>
        </section>

        <section className="calc-info">
          <div className="container">
            <h2>Como se calcula o IMC</h2>
            <p>
              O IMC é o resultado do peso (em quilogramas) dividido pela altura (em metros) elevada ao quadrado:
            </p>
            <p className="calc-formula">IMC = peso ÷ (altura × altura)</p>
            <p>
              Exemplo: um paciente com 70 kg e 1,70 m de altura tem IMC = 70 ÷ (1,70 × 1,70) = 70 ÷ 2,89 = 24,2,
              o que corresponde a peso adequado na faixa adulta.
            </p>
          </div>
        </section>

        <section className="calc-info">
          <div className="container">
            <h2>Por que a faixa etária muda a classificação</h2>
            <p>
              Em idosos, o critério de Lipschitz desloca a faixa adequada para 22 a 27, porque IMC
              baixo em idoso está associado a risco nutricional, e não a saúde metabólica.
            </p>
            <p>
              Em menores de 18 anos, a avaliação correta é por percentil ou escore-z conforme as
              curvas de crescimento. A faixa exibida aqui é uma referência simplificada para triagem
              rápida e não substitui essas curvas.
            </p>
          </div>
        </section>

        <section className="calc-info">
          <div className="container">
            <h2>Tabela de classificação (OMS)</h2>
            <table className="calc-table">
              <thead>
                <tr>
                  <th>IMC</th>
                  <th>Classificação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abaixo de 18,5</td>
                  <td>Baixo peso</td>
                </tr>
                <tr>
                  <td>18,5 a 24,9</td>
                  <td>Peso adequado</td>
                </tr>
                <tr>
                  <td>25,0 a 29,9</td>
                  <td>Sobrepeso</td>
                </tr>
                <tr>
                  <td>30,0 a 34,9</td>
                  <td>Obesidade grau I</td>
                </tr>
                <tr>
                  <td>35,0 a 39,9</td>
                  <td>Obesidade grau II</td>
                </tr>
                <tr>
                  <td>40,0 ou mais</td>
                  <td>Obesidade grau III</td>
                </tr>
              </tbody>
            </table>
            <p className="calc-note">
              Faixa etária 60+: a referência acima muda, com a faixa adequada deslocada para IMC
              entre 22 e 27 (critério de Lipschitz), conforme explicado na seção anterior.
            </p>
          </div>
        </section>

        <section className="calc-info">
          <div className="container">
            <h2>Limitações do IMC</h2>
            <p>
              O IMC não distingue massa magra de massa gorda, o que o torna pouco confiável em atletas e
              pessoas muito musculosas, que podem ter um IMC elevado sem excesso de gordura corporal. O índice
              também não informa como a gordura está distribuída pelo corpo. Por isso, na prática clínica, o
              IMC costuma ser combinado com dobras cutâneas, circunferências e relação cintura-quadril para
              uma avaliação mais completa — veja a{' '}
              <a href="/calculadora-pollock-7-dobras">calculadora de Pollock 7 dobras</a> para estimar o
              percentual de gordura.
            </p>
          </div>
        </section>

        <section className="calc-cta">
          <div className="container calc-cta-container">
            <p>
              Para ir além do IMC, o BodyGraph reúne avaliação de composição corporal completa — dobras
              cutâneas, bioimpedância, circunferências e mais — em uma única plataforma para nutricionistas.
            </p>
            <a href="https://app.bodygraph.com.br/?onboarding=1" className="btn calc-cta-btn">
              Comece grátis por 30 dias
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
