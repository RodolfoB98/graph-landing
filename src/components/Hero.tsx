import { useState, useEffect } from 'react';

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTablet = windowWidth < 980;
  const isMobile = windowWidth < 640;

  return (
    <section 
      style={{
        background: '#0b1a12',
        position: 'relative',
        overflow: 'hidden',
        minHeight: isTablet ? 'auto' : '92vh',
        padding: isTablet ? '120px 0 80px' : '0',
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

      <div className="hero-container reveal active" style={{ 
        position: 'relative', 
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : 'minmax(0, 1.05fr) minmax(0, 1fr)',
        gap: isTablet ? '40px' : '56px',
        alignItems: 'center',
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '0 24px',
        width: '100%'
      }}>
        {/* Coluna Esquerda */}
        <div className="hero-content" style={{ maxWidth: isTablet ? '100%' : '560px', textAlign: 'left' }}>
          <span className="hero-eyebrow">Plataforma para nutricionistas</span>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.6vw, 4.14rem)', lineHeight: 1.05, fontFamily: 'Fraunces, serif' }}>Todo o seu consultório de nutrição em uma só plataforma.</h1>
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

        {/* Coluna Direita */}
        <div style={{ display: isMobile ? 'none' : 'block', maxWidth: isTablet ? '560px' : 'none', margin: isTablet ? '0 auto' : '0', width: '100%' }}>
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden' }}>
            <img
              src="/HERO-EXAMES.png"
              alt="Painel de exames do BG BodyGraph com biomarcadores e valores de referência"
              loading="eager"
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.14)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.38)'
              }}
            />
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '90px',
              pointerEvents: 'none',
              background: 'linear-gradient(180deg, rgba(11,26,18,0) 0%, rgba(11,26,18,0.55) 100%)'
            }}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
