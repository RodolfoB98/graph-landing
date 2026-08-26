import { useState, useEffect } from 'react';

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTablet = windowWidth < 980;

  return (
    <section 
      style={{
        backgroundColor: '#0f3521',
        backgroundImage: 'url(/hero-bodygraph.webp)',
        backgroundSize: 'cover',
        backgroundPosition: isTablet ? 'center 20%' : 'center right',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '92vh',
        padding: isTablet ? '120px 0 80px' : '0',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.025,
        mixBlendMode: 'overlay',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'140\' height=\'140\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'
      }}></div>

      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background: isTablet
          ? 'linear-gradient(180deg, rgba(10,20,14,0.35) 0%, rgba(10,20,14,0.82) 55%, rgba(10,20,14,0.93) 100%)'
          : 'linear-gradient(90deg, rgba(10,20,14,0.88) 0%, rgba(10,20,14,0.72) 32%, rgba(10,20,14,0.34) 55%, rgba(10,20,14,0.05) 78%)'
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
          position: 'relative',
          zIndex: 2,
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div className="hero-content" style={{ maxWidth: isTablet ? '100%' : '520px', textAlign: 'left' }}>
            <span className="hero-eyebrow" style={{ color: '#8fd4a8' }}>Plataforma para nutricionistas</span>
            <h1 style={{
              fontSize: 'clamp(2.6rem, 5.6vw, 5rem)',
              lineHeight: 1.02,
              fontFamily: 'Fraunces, serif',
              color: '#ffffff',
              letterSpacing: '-0.015em',
              marginBottom: '24px'
            }}>
              <span style={{ display: 'block' }}>Menos digitação.</span>
              <span style={{ display: 'block' }}>Mais nutrição.</span>
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.88)',
              maxWidth: '440px',
              fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
              lineHeight: 1.55,
              marginBottom: '40px'
            }}>
              Prescrição com base TACO, interpretação de exames por IA, avaliação nutricional e portal do paciente — do primeiro atendimento ao acompanhamento.
            </p>
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
              <span className="hero-note" style={{ color: 'rgba(255,255,255,0.62)' }}>Sem cartão de crédito &middot; Cancele quando quiser</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
