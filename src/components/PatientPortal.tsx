export default function PatientPortal() {
  return (
    <section className="patient-portal">
      <div className="container patient-portal-container">
        <div className="patient-portal-content reveal active">
          <h2>Seu paciente também faz parte.</h2>
          <p className="patient-portal-subtitle">
            Com o Portal do Paciente, o profissional gera um link exclusivo e o paciente acessa tudo pelo celular plano alimentar, resultados de exames, evolução e diário pessoal. Sem app, sem cadastro, sem complicação.
          </p>
          <ul className="patient-portal-bullets">
            <li>
              <svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
              <span>Acesso por link exclusivo, sem login</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
              <span>Plano alimentar com refeições e horários</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
              <span>Exames, evolução, fotos e diário pessoal</span>
            </li>
          </ul>
        </div>
        <div className="patient-portal-mockup reveal active" style={{ transitionDelay: '0.2s' }}>
          <div className="phone-frame">
            <img src="/plano-paciente.jpg" alt="Portal do Paciente" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '38px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
