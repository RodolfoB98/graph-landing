export default function Hero() {
  return (
    <section 
      style={{
        background: '#0b1a12',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: 'radial-gradient(900px 600px at 78% 12%, rgba(46,125,79,0.28), transparent 62%), radial-gradient(700px 500px at 18% 88%, rgba(82,168,117,0.10), transparent 60%), linear-gradient(180deg, #0b1a12 0%, #10261a 100%)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.05,
        mixBlendMode: 'overlay',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'140\' height=\'140\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'
      }}></div>

      <div className="container hero-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content reveal active">
          <span className="hero-eyebrow">Plataforma para nutricionistas</span>
          <h1>Todo o seu consultório de nutrição em uma só plataforma.</h1>
          <p>Prescrição com base TACO, interpretação de exames por IA, avaliação nutricional e portal do paciente integrados, do primeiro atendimento ao acompanhamento.</p>
          <div className="hero-cta">
            <a 
              href="https://app.bodygraph.com.br/?onboarding=1" 
              className="btn" 
              style={{ background: '#2e7d4f', color: '#ffffff', border: 'none', boxShadow: '0 4px 14px 0 rgba(46, 125, 79, 0.2)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#52a875';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(46, 125, 79, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#2e7d4f';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(46, 125, 79, 0.2)';
              }}
            >
              Comece grátis por 30 dias &rarr;
            </a>
            <span className="hero-note" style={{ color: 'rgba(255,255,255,0.55)' }}>Sem cartão de crédito &middot; Cancele quando quiser</span>
          </div>
        </div>
      </div>
    </section>
  );
}
