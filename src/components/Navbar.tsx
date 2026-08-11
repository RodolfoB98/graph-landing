import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-content">
        <a href="#" className="logo">
          <img src="/logo.png" alt="BG BodyGraph" className="nav-logo-image" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="https://app.bodygraph.com.br" className="btn btn-white" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.7)', color: '#fff' }}>Entrar</a>
          <a href="https://app.bodygraph.com.br/?onboarding=1" className="btn" style={{ background: 'var(--primary)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>Assinar agora</a>
        </div>
      </div>
    </nav>
  );
}
