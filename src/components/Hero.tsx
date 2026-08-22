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

      <div className="hero-wrapper reveal active" style={{ 
        position: 'relative', 
        zIndex: 2,
        width: '100%',
        display: isTablet ? 'flex' : 'block',
        flexDirection: isTablet ? 'column' : 'row',
        gap: isTablet ? '40px' : '0'
      }}>
        
        {/* Container do Texto */}
        <div style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
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
        </div>

        {/* Coluna Direita (Imagem) */}
        <div style={{ 
          display: isMobile ? 'none' : 'block',
          position: isTablet ? 'relative' : 'absolute',
          top: isTablet ? 'auto' : '50%',
          right: isTablet ? 'auto' : '0',
          transform: isTablet ? 'none' : 'translateY(-50%)',
          width: isTablet ? '100%' : '52vw',
          maxWidth: isTablet ? '560px' : '900px',
          minWidth: isTablet ? '0' : '520px',
          margin: isTablet ? '0 auto' : '0',
          padding: isTablet ? '0 24px' : '0',
          boxSizing: 'border-box'
        }}>
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src="/HERO-EXAMES.jpg"
              alt="Painel de exames do BG BodyGraph com biomarcadores e valores de referência"
              loading="eager"
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.14)',
                boxShadow: '0 30px 70px rgba(0,0,0,0.32)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
                maskComposite: 'intersect'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
