import { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
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
        <button className="btn btn-primary" onClick={onOpenModal}>Lista de espera</button>
      </div>
    </nav>
  );
}
