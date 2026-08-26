import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const textColor = '#ffffff';
  const textMuted = 'rgba(255,255,255,0.78)';
  const logoSub = 'rgba(255,255,255,0.65)';
  const btnBorder = 'rgba(255,255,255,0.32)';

  const navLinkStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    color: textMuted,
    textDecoration: 'none',
    padding: '8px 14px',
    transition: 'color 0.2s ease'
  };

  return (
    <header 
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '72px',
        transition: 'background 0.25s ease, border-color 0.25s ease',
        background: scrolled ? 'rgba(11,26,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        boxShadow: 'none'
      }}
    >
      {!scrolled && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '150px',
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(8,18,12,0.55) 0%, rgba(8,18,12,0.22) 55%, transparent 100%)'
        }}></div>
      )}
      <div 
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '100%'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/logo.png" alt="BG Logo" style={{ filter: 'brightness(0) invert(1)', height: '36px', width: 'auto' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: '15px', fontWeight: 600, color: textColor, lineHeight: 1 }}>BG</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: logoSub, lineHeight: 1 }}>BODYGRAPH</span>
            </div>
          </a>

          {windowWidth >= 900 && (
            <nav style={{ display: 'flex', gap: '4px' }}>
              <a href="#funcionalidades" style={navLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = textColor} onMouseLeave={(e) => e.currentTarget.style.color = textMuted} onFocus={(e) => e.currentTarget.style.color = textColor} onBlur={(e) => e.currentTarget.style.color = textMuted}>Funcionalidades</a>
              <a href="#produto" style={navLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = textColor} onMouseLeave={(e) => e.currentTarget.style.color = textMuted} onFocus={(e) => e.currentTarget.style.color = textColor} onBlur={(e) => e.currentTarget.style.color = textMuted}>Como funciona</a>
              <a href="#precos" style={navLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = textColor} onMouseLeave={(e) => e.currentTarget.style.color = textMuted} onFocus={(e) => e.currentTarget.style.color = textColor} onBlur={(e) => e.currentTarget.style.color = textMuted}>Preços</a>
              <a href="#faq" style={navLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = textColor} onMouseLeave={(e) => e.currentTarget.style.color = textMuted} onFocus={(e) => e.currentTarget.style.color = textColor} onBlur={(e) => e.currentTarget.style.color = textMuted}>FAQ</a>
            </nav>
          )}
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a
            href="https://www.instagram.com/bg.bodygraph/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do BG BodyGraph"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '999px',
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'background 0.2s ease, color 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            onFocus={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
            onBlur={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://app.bodygraph.com.br" className="btn" style={{ background: 'transparent', border: `1px solid ${btnBorder}`, color: textColor, padding: '12px 24px' }}>Entrar</a>
          <a 
            href="https://app.bodygraph.com.br/?onboarding=1" 
            className="btn" 
            style={{ background: '#2e7d4f', color: '#ffffff', border: 'none', padding: '12px 24px' }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#52a875'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#2e7d4f'}
          >
            Assinar agora
          </a>
        </div>
      </div>
    </header>
  );
}
