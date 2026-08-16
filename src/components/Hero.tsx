export default function Hero() {
  return (
    <section className="hero">
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06), transparent 60%)' }}></div>
      <div className="container hero-container">
        <div className="hero-content reveal active">
          <span className="hero-eyebrow">Plataforma para nutricionistas</span>
          <h1>Todo o seu consultório de nutrição em uma só plataforma.</h1>
          <p>Prescrição com base TACO, interpretação de exames por IA, avaliação nutricional e portal do paciente integrados, do primeiro atendimento ao acompanhamento.</p>
          <div className="hero-cta">
            <a href="https://app.bodygraph.com.br/?onboarding=1" className="btn btn-primary cta-white-text">Comece grátis por 30 dias &rarr;</a>
            <span className="hero-note">Sem cartão de crédito &middot; Cancele quando quiser</span>
          </div>
        </div>
      </div>
    </section>
  );
}
