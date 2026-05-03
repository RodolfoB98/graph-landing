interface PricingProps {
  onOpenModal: () => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section className="pricing" id="precos">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Simples, transparente, justo.</h2>
        </div>
        <div className="pricing-grid">
          {/* Basic */}
          <div className="pricing-card reveal active">
            <h3 className="plan-name">Basic</h3>
            <div className="plan-price">R$ 59<span>/mês</span></div>
            <ul className="plan-features">
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> 1 usuário</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Até 50 pacientes</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Exames + relatórios</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Questionários</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> IA limitada (30-50 consultas)</li>
            </ul>
            <button className="btn" onClick={onOpenModal}>Entrar na lista de espera</button>
          </div>
          {/* Pro */}
          <div className="pricing-card pro reveal active" style={{ transitionDelay: '0.1s' }}>
            <div className="badge">Mais escolhido</div>
            <h3 className="plan-name">Pro</h3>
            <div className="plan-price">R$ 119<span>/mês</span></div>
            <ul className="plan-features">
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Até 3 usuários</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Até 200 pacientes</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> IA ampliada</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Organização multi-usuário</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Agenda completa</li>
            </ul>
            <button className="btn btn-primary" onClick={onOpenModal}>Entrar na lista de espera</button>
          </div>
          {/* Clínica */}
          <div className="pricing-card reveal active" style={{ transitionDelay: '0.2s' }}>
            <h3 className="plan-name">Clínica</h3>
            <div className="plan-price">R$ 249<span>/mês</span></div>
            <ul className="plan-features">
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Usuários ilimitados</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Pacientes ilimitados</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> IA robusta (uso intensivo)</li>
              <li><svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Suporte prioritário</li>
            </ul>
            <button className="btn" onClick={onOpenModal}>Entrar na lista de espera</button>
          </div>
        </div>
        <p className="pricing-note">Todos os planos incluem 14 dias grátis para testar.</p>
      </div>
    </section>
  );
}
