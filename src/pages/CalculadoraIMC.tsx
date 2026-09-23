import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Faixa = {
  label: string;
  min: number;
  max: number;
};

const FAIXAS: Faixa[] = [
  { label: 'Baixo peso', min: -Infinity, max: 18.5 },
  { label: 'Peso adequado', min: 18.5, max: 25 },
  { label: 'Sobrepeso', min: 25, max: 30 },
  { label: 'Obesidade grau I', min: 30, max: 35 },
  { label: 'Obesidade grau II', min: 35, max: 40 },
  { label: 'Obesidade grau III', min: 40, max: Infinity },
];

function classificar(imc: number): string {
  const faixa = FAIXAS.find((f) => imc >= f.min && imc < f.max);
  return faixa ? faixa.label : '';
}

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const pesoNum = parseFloat(peso.replace(',', '.'));
  const alturaNum = parseFloat(altura.replace(',', '.'));
  const alturaM = alturaNum > 3 ? alturaNum / 100 : alturaNum;

  const imc =
    pesoNum > 0 && alturaM > 0 ? pesoNum / (alturaM * alturaM) : null;

  return (
    <>
      <Navbar />
      <main className="calc-page">
        <section className="calc-hero">
          <div className="container">
            <h1>Calculadora de IMC</h1>
            <p className="calc-hero-subtitle">
              Calcule seu Índice de Massa Corporal e veja a classificação da Organização Mundial da Saúde (OMS)
              a partir do seu peso e altura.
            </p>
          </div>
        </section>

        <section className="calc-tool">
          <div className="container calc-tool-container">
            <div className="calc-field">
              <label htmlFor="peso">Peso (kg)</label>
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
              <label htmlFor="altura">Altura (em metros ou cm)</label>
              <input
                id="altura"
                type="number"
                inputMode="decimal"
                placeholder="Ex: 1.70 ou 170"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="calc-input"
              />
            </div>

            <div className="calc-result">
              {imc !== null && isFinite(imc) ? (
                <>
                  <span className="calc-result-value">{imc.toFixed(1)}</span>
                  <span className="calc-result-label">{classificar(imc)}</span>
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
              Exemplo: uma pessoa com 70 kg e 1,70 m de altura tem IMC = 70 ÷ (1,70 × 1,70) = 70 ÷ 2,89 = 24,2,
              o que corresponde a peso adequado.
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
              uma avaliação mais completa.
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
