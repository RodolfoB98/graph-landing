export default function Pricing() {
  return (
    <section className="pricing" id="precos">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Simples, transparente, justo.</h2>
        </div>
        <div className="pricing-grid" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Pro */}
          <div className="pricing-card pro reveal active" style={{ maxWidth: '400px', width: '100%' }}>
            <h3 className="plan-name" style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '8px' }}>BodyGraph PRO</h3>
            <div className="plan-price" style={{ marginBottom: '4px' }}>R$ 59<span>/mês</span></div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', fontWeight: 500 }}>
              Oferta de fundador, 10 primeiras vagas.
            </p>
            <ul className="plan-features">
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Pacientes ilimitados</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Avaliações antropométricas completas</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Exames laborais e relatórios com IA</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Prescrição dietética (base TACO)</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Questionários pré-consulta</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Agenda completa integrada</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Portal exclusivo para o paciente</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Bia (Assistente IA Biomédica)</li>
            </ul>
            <a href="https://app.bodygraph.com.br/?onboarding=1" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '32px' }}>Assinar agora</a>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '16px', lineHeight: '1.4' }}>
              Crie sua conta grátis agora e use por 30 dias sem cartão.<br />
              Depois, R$59/mês (oferta de fundador) se quiser continuar.
            </p>
          </div>
        </div>
        <p className="pricing-note">Depois de fechadas as 10 vagas: R$ 99/mês ou R$ 89/mês no plano anual.</p>
      </div>
    </section>
  );
}
