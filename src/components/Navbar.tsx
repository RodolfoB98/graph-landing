import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-content">
        <a href="#" className="logo">
          <img src="/logo.png" alt="BG BodyGraph" className="nav-logo-image" />
        </a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="https://app.bodygraph.com.br" className="btn btn-white" style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>Entrar</a>
          <a href="https://app.bodygraph.com.br/?onboarding=1" className="btn btn-primary">Assinar agora</a>
        </div>
      </div>
    </nav>
  );
}
