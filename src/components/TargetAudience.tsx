export default function TargetAudience() {
  return (
    <section className="target">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Feito para quem cuida de pessoas.</h2>
        </div>
        <div className="target-grid">
          <div className="target-col reveal active">
            <h3>Profissionais solo</h3>
            <p>Nutricionistas e médicos que atendem individualmente e precisam de eficiência extrema em sua rotina, sem complexidade de sistemas antigos.</p>
          </div>
          <div className="target-col reveal active" style={{ transitionDelay: '0.1s' }}>
            <h3>Clínicas e equipes</h3>
            <p>Organizações com múltiplos profissionais que precisam de histórico unificado, compartilhamento seguro de pacientes, agenda central e controle total.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
