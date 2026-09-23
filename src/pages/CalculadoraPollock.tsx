import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { calcGorduraPollock7, classGordura, type Sexo } from '../lib/antropometria';

const CAMPOS_DOBRAS = [
  { key: 'peitoral', label: 'Peitoral' },
  { key: 'axilarMedia', label: 'Axilar média' },
  { key: 'triceps', label: 'Tríceps' },
  { key: 'subescapular', label: 'Subescapular' },
  { key: 'abdominal', label: 'Abdominal' },
  { key: 'suprailiaca', label: 'Suprailíaca' },
  { key: 'coxa', label: 'Coxa' },
] as const;

type DobrasForm = Record<(typeof CAMPOS_DOBRAS)[number]['key'], string>;

const DOBRAS_INICIAIS: DobrasForm = {
  peitoral: '',
  axilarMedia: '',
  triceps: '',
  subescapular: '',
  abdominal: '',
  suprailiaca: '',
  coxa: '',
};

export default function CalculadoraPollock() {
  const [sexo, setSexo] = useState<Sexo>('M');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [dobras, setDobras] = useState<DobrasForm>(DOBRAS_INICIAIS);

  const idadeNum = parseFloat(idade.replace(',', '.'));
  const pesoNum = parseFloat(peso.replace(',', '.'));

  const dobrasNum = Object.fromEntries(
    CAMPOS_DOBRAS.map(({ key }) => [key, parseFloat(dobras[key].replace(',', '.')) || 0])
  ) as Record<(typeof CAMPOS_DOBRAS)[number]['key'], number>;

  const todasPreenchidas = CAMPOS_DOBRAS.every(({ key }) => dobras[key].trim() !== '');
  const idadeValida = idade.trim() !== '' && isFinite(idadeNum) && idadeNum > 0;

  const resultado =
    todasPreenchidas && idadeValida ? calcGorduraPollock7(dobrasNum, idadeNum, sexo) : null;

  const classificacao =
    resultado ? classGordura(resultado.pct, sexo, idadeNum) : null;

  const massaGorda =
    resultado && pesoNum > 0 ? Math.round(((pesoNum * resultado.pct) / 100) * 10) / 10 : null;
  const massaMagra =
    resultado && pesoNum > 0 && massaGorda !== null
      ? Math.round((pesoNum - massaGorda) * 10) / 10
      : null;

  const handleDobraChange = (key: keyof DobrasForm, value: string) => {
    setDobras((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Navbar />
      <main className="calc-page">
        <section className="calc-hero">
          <div className="container">
            <h1>Calculadora de Pollock 7 dobras</h1>
            <p className="calc-hero-subtitle">
              Estime o percentual de gordura corporal pelo protocolo de Jackson e Pollock a partir
              de sete dobras cutâneas, sexo e idade do paciente.
            </p>
          </div>
        </section>

        <section className="calc-tool">
          <div className="container calc-tool-container">
            <div className="calc-field calc-field-full">
              <span className="calc-field-legend">Sexo</span>
              <div className="calc-radio-group">
                <label className="calc-radio">
                  <input
                    type="radio"
                    name="sexo"
                    checked={sexo === 'M'}
                    onChange={() => setSexo('M')}
                  />
                  Masculino
                </label>
                <label className="calc-radio">
                  <input
                    type="radio"
                    name="sexo"
                    checked={sexo === 'F'}
                    onChange={() => setSexo('F')}
                  />
                  Feminino
                </label>
              </div>
            </div>

            <div className="calc-field">
              <label htmlFor="idade">Idade (anos)</label>
              <input
                id="idade"
                type="number"
                inputMode="decimal"
                placeholder="Ex: 30"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                className="calc-input"
              />
            </div>
            <div className="calc-field">
              <label htmlFor="peso">Peso (kg, opcional)</label>
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

            <div className="calc-dobras-grid">
              {CAMPOS_DOBRAS.map(({ key, label }) => (
                <div className="calc-field" key={key}>
                  <label htmlFor={key}>{label} (mm)</label>
                  <input
                    id={key}
                    type="number"
                    inputMode="decimal"
                    placeholder="0"
                    value={dobras[key]}
                    onChange={(e) => handleDobraChange(key, e.target.value)}
                    className="calc-input"
                  />
                </div>
              ))}
            </div>

            <div className="calc-result calc-result-pollock">
              {resultado && classificacao ? (
                <>
                  <div className="calc-result-item">
                    <span className="calc-result-value">{resultado.soma.toFixed(1)} mm</span>
                    <span className="calc-result-label">Somatório das 7 dobras</span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-value">{resultado.pct.toFixed(1)}%</span>
                    <span className="calc-result-label">{classificacao.label}</span>
                  </div>
                  {massaGorda !== null && massaMagra !== null && (
                    <>
                      <div className="calc-result-item">
                        <span className="calc-result-value">{massaGorda.toFixed(1)} kg</span>
                        <span className="calc-result-label">Massa gorda</span>
                      </div>
                      <div className="calc-result-item">
                        <span className="calc-result-value">{massaMagra.toFixed(1)} kg</span>
                        <span className="calc-result-label">Massa magra</span>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <span className="calc-result-placeholder">
                  Preencha sexo, idade e as sete dobras para calcular
                </span>
              )}
            </div>
          </div>
        </section>

        <section className="calc-info">
          <div className="container">
            <h2>As equações de Jackson e Pollock</h2>
            <p>
              O protocolo de 7 dobras estima a densidade corporal a partir do somatório das sete
              medidas, ajustado por idade e sexo. A densidade resultante é convertida em percentual
              de gordura pela equação de Siri. As equações usadas aqui são as de Jackson e Pollock
              (1978) para homens e Jackson, Pollock e Ward (1980) para mulheres.
            </p>
          </div>
        </section>

        <section className="calc-info">
          <div className="container">
            <h2>Onde medir cada dobra</h2>
            <ul className="calc-list">
              <li><strong>Peitoral:</strong> linha diagonal entre o mamilo e a axila, na metade da distância.</li>
              <li><strong>Axilar média:</strong> linha axilar média, na altura do apêndice xifoide.</li>
              <li><strong>Tríceps:</strong> face posterior do braço, no ponto médio entre acrômio e olécrano.</li>
              <li><strong>Subescapular:</strong> logo abaixo do ângulo inferior da escápula, em diagonal.</li>
              <li><strong>Abdominal:</strong> dobra vertical a cerca de 2 cm à direita da cicatriz umbilical.</li>
              <li><strong>Suprailíaca:</strong> acima da crista ilíaca, na linha axilar anterior.</li>
              <li><strong>Coxa:</strong> face anterior da coxa, no ponto médio entre a prega inguinal e a borda superior da patela.</li>
            </ul>
          </div>
        </section>

        <section className="calc-info">
          <div className="container">
            <h2>Classificação do percentual de gordura</h2>
            <table className="calc-table">
              <thead>
                <tr>
                  <th>Faixa etária</th>
                  <th>Sexo</th>
                  <th>Essencial</th>
                  <th>Atlético</th>
                  <th>Adequado</th>
                  <th>Acima</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Até 29</td><td>Feminino</td><td>&lt; 12%</td><td>12–19,9%</td><td>20–27,9%</td><td>28–31,9%</td></tr>
                <tr><td>30–39</td><td>Feminino</td><td>&lt; 12%</td><td>12–20,9%</td><td>21–28,9%</td><td>29–32,9%</td></tr>
                <tr><td>40–49</td><td>Feminino</td><td>&lt; 12%</td><td>12–21,9%</td><td>22–30,9%</td><td>31–34,9%</td></tr>
                <tr><td>50–59</td><td>Feminino</td><td>&lt; 12%</td><td>12–22,9%</td><td>23–32,9%</td><td>33–35,9%</td></tr>
                <tr><td>60+</td><td>Feminino</td><td>&lt; 12%</td><td>12–23,9%</td><td>24–34,9%</td><td>35–37,9%</td></tr>
                <tr><td>Até 29</td><td>Masculino</td><td>&lt; 3%</td><td>3–10,9%</td><td>11–17,9%</td><td>18–21,9%</td></tr>
                <tr><td>30–39</td><td>Masculino</td><td>&lt; 3%</td><td>3–12,9%</td><td>13–19,9%</td><td>20–23,9%</td></tr>
                <tr><td>40–49</td><td>Masculino</td><td>&lt; 3%</td><td>3–14,9%</td><td>15–21,9%</td><td>22–25,9%</td></tr>
                <tr><td>50–59</td><td>Masculino</td><td>&lt; 3%</td><td>3–16,9%</td><td>17–23,9%</td><td>24–27,9%</td></tr>
                <tr><td>60+</td><td>Masculino</td><td>&lt; 3%</td><td>3–18,9%</td><td>19–25,9%</td><td>26–29,9%</td></tr>
              </tbody>
            </table>
            <p className="calc-note">
              Valores iguais ou acima do limite superior de "Acima" são classificados como Obesidade.
            </p>
          </div>
        </section>

        <section className="calc-info">
          <div className="container">
            <h2>Cuidados na medição</h2>
            <p>
              A confiabilidade do resultado depende de fatores como a calibração periódica do
              adipômetro, a padronização do lado do corpo medido (convencionalmente o lado direito),
              repetir cada medida duas ou três vezes e usar a mediana, e a experiência do avaliador
              na localização exata dos pontos anatômicos.
            </p>
          </div>
        </section>

        <section className="calc-cta">
          <div className="container calc-cta-container">
            <p>
              O BodyGraph calcula Pollock 7 dobras e outros protocolos automaticamente, já integrado
              ao prontuário do paciente e ao histórico de avaliações. Veja também a{' '}
              <a href="/calculadora-imc">calculadora de IMC</a>.
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
