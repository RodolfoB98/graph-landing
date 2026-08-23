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
        backgroundColor: '#f7f9f6',
        backgroundImage: isTablet ? 'none' : 'url(/HERO-FINAL.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
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

      {!isTablet && (
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(90deg, rgba(247,249,246,0.72) 0%, rgba(247,249,246,0.45) 30%, rgba(247,249,246,0.12) 48%, transparent 60%)'
        }}></div>
      )}

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
              <span className="hero-note">Sem cartão de crédito &middot; Cancele quando quiser</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
