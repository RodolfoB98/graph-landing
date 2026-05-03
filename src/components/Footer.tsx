export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="BG BodyGraph Logo" className="nav-logo-image" style={{ filter: 'grayscale(1) brightness(0.4)', opacity: 0.8 }} />
          </div>
          <div className="footer-links">
            <a href="#">Funcionalidades</a>
            <a href="#precos">Preços</a>
            <a href="#">FAQ</a>
            <a href="mailto:contato@bodygraph.com.br" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              contato@bodygraph.com.br
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 BG BodyGraph. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
