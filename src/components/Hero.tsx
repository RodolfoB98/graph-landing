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
        background: '#f7f9f6',
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
        background: 'radial-gradient(760px 520px at 82% 8%, rgba(220,168,110,0.16), transparent 62%), radial-gradient(640px 480px at 12% 92%, rgba(82,168,117,0.12), transparent 60%), radial-gradient(900px 700px at 50% 50%, rgba(255,255,255,0.8), transparent 70%)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.025,
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
              <span className="hero-note">Sem cartão de crédito &middot; Cancele quando quiser</span>
            </div>
          </div>
        </div>

        {/* Coluna Direita (Mockup iPad) */}
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
          
          {/* GLOW ORGÂNICO POR TRÁS DO IPAD */}
          <div style={{
            position: 'absolute',
            width: '120%',
            height: '120%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle at 50% 45%, rgba(220,168,110,0.09) 0%, rgba(82,168,117,0.06) 38%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 0
          }}></div>

          {/* FRAME DO IPAD (CSS puro) */}
          <div style={{
            background: 'linear-gradient(155deg, #3a3d3f 0%, #1c1e1f 55%, #2a2c2d 100%)',
            borderRadius: '28px',
            padding: '14px 14px 14px 14px',
            transform: isTablet ? 'none' : 'perspective(2000px) rotateY(-6deg) rotateX(2deg)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 40px 90px rgba(0,0,0,0.55), 0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            
            {/* CÂMERA */}
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #4a4f52 0%, #101112 100%)',
              position: 'absolute',
              top: '4px',
              left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: 'inset 0 0 2px rgba(0,0,0,0.8)'
            }}></div>

            {/* TELA */}
            <div style={{
              background: '#f7f9f6',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '1.43 / 1'
            }}>
              <img
                src="/HERO-EXAMES.jpg"
                alt="Painel de exames do BG BodyGraph com biomarcadores e valores de referência"
                loading="eager"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: 'linear-gradient(115deg, rgba(255,255,255,0.10) 0%, transparent 30%)'
              }}></div>
            </div>

            {/* BARRA HOME */}
            <div style={{
              width: '80px',
              height: '3px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.35)',
              position: 'absolute',
              bottom: '5px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}></div>

          </div>
        </div>

      </div>
    </section>
  );
}
