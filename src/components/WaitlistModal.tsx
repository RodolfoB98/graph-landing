import { useState } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const role = (form.elements.namedItem('role') as HTMLSelectElement).value;

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbx8-hBI7DoT388kLE0XrqiRvCPrKsXVZyHpCbRdzv-mCQd0Zvuofk1oZ5cRO88YsZ8/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            role,
            timestamp: new Date().toISOString()
          })
        }
      );
      
      // Because mode: 'no-cors' always returns an opaque response, we assume success if no exception was thrown
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      setErrorMsg("Erro ao enviar. Tente novamente.");
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} id="waitlist-modal" onClick={handleOverlayClick}>
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} id="close-modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        
        {!isSuccess ? (
          <div id="waitlist-form-container">
            <h3>Garanta seu acesso antecipado</h3>
            <form id="waitlist-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome completo</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="Dr(a). Seu Nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail profissional</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="contato@clinica.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="role">Profissão</label>
                <select id="role" name="role" className="form-control" required defaultValue="">
                  <option value="" disabled>Selecione sua atuação</option>
                  <option value="nutricionista">Nutricionista</option>
                  <option value="medico">Médico(a)</option>
                  <option value="clinica">Gestor(a) de Clínica</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Quero meu acesso"}
              </button>
              {errorMsg && <p style={{ color: 'red', textAlign: 'center', marginTop: '12px', fontSize: '0.9rem' }}>{errorMsg}</p>}
              <p className="modal-note">Você receberá um e-mail assim que as vagas abrirem.</p>
            </form>
          </div>
        ) : (
          <div id="success-message" className="success-message" style={{ display: 'block' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            <h4>✅ Você está na lista!</h4>
            <p>Agradecemos o interesse. Entraremos em contato em breve com o seu convite de acesso antecipado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
