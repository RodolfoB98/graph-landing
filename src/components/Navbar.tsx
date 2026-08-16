import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '12px 0' : '20px 0',
        transition: 'background 0.25s ease, border-color 0.25s ease, padding 0.25s ease',
        background: scrolled ? 'rgba(11,26,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        boxShadow: 'none'
      }}
    >
      <div className="container nav-content">
        <a href="#" className="logo">
          <img src="/logo.png" alt="BG BodyGraph" className="nav-logo-image" style={{ filter: 'brightness(0) invert(1)', height: '34px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="https://app.bodygraph.com.br" className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.28)', color: '#ffffff' }}>Entrar</a>
          <a 
            href="https://app.bodygraph.com.br/?onboarding=1" 
            className="btn" 
            style={{ background: '#2e7d4f', color: '#ffffff', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#52a875'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#2e7d4f'}
          >
            Assinar agora
          </a>
        </div>
      </div>
    </nav>
  );
}
