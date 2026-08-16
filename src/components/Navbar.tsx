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

  const navLinkStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    color: 'rgba(255,255,255,0.72)',
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
      <div 
        style={{
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
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: '15px', fontWeight: 600, color: '#ffffff', lineHeight: 1 }}>BG</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', lineHeight: 1 }}>BODYGRAPH</span>
            </div>
          </a>

          {windowWidth >= 900 && (
            <nav style={{ display: 'flex', gap: '4px' }}>
              <a href="#funcionalidades" style={navLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'} onFocus={(e) => e.currentTarget.style.color = '#ffffff'} onBlur={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>Funcionalidades</a>
              <a href="#produto" style={navLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'} onFocus={(e) => e.currentTarget.style.color = '#ffffff'} onBlur={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>Como funciona</a>
              <a href="#precos" style={navLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'} onFocus={(e) => e.currentTarget.style.color = '#ffffff'} onBlur={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>Preços</a>
              <a href="#faq" style={navLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'} onFocus={(e) => e.currentTarget.style.color = '#ffffff'} onBlur={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>FAQ</a>
            </nav>
          )}
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="https://app.bodygraph.com.br" className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.28)', color: '#ffffff', padding: '12px 24px' }}>Entrar</a>
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
