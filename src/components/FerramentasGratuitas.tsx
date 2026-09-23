const ferramentas = [
  {
    title: 'Calculadora de IMC',
    desc: 'Classificação ajustada por faixa etária, com as referências de adolescente e de idoso, não só a tabela adulta.',
    href: '/calculadora-imc',
    linkText: 'Abrir calculadora de IMC',
  },
  {
    title: 'Calculadora de Pollock 7 dobras',
    desc: 'Percentual de gordura pelas equações de Jackson e Pollock, com classificação por sexo e idade e cálculo de massa magra.',
    href: '/calculadora-pollock-7-dobras',
    linkText: 'Abrir calculadora de Pollock',
  },
];

export default function FerramentasGratuitas() {
  return (
    <section className="ferramentas" id="ferramentas">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Ferramentas gratuitas</h2>
          <p className="ferramentas-subtitle">
            Use sem cadastro. As mesmas contas que rodam dentro da plataforma.
          </p>
        </div>

        <div className="ferramentas-grid reveal active">
          {ferramentas.map((item) => (
            <div className="ferramentas-card" key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={item.href} className="ferramentas-link">
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
