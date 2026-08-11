export default function HumanContext() {
  return (
    <section className="human-context">
      <div className="container human-context-container">
        <div className="human-context-visual reveal active">
          <div className="mockup-fade-container">
            <img src="/portal-humano.png" alt="Nutricionista utilizando o BG BodyGraph no consultório" loading="lazy" width="460" height="613" />
          </div>
        </div>
        <div className="human-context-content reveal active" style={{ transitionDelay: '0.2s' }}>
          <h2>Feito por quem entende a rotina do consultório.</h2>
          <p>
            Cada recurso do BG BodyGraph nasceu de uma dor real do consultório, da prescrição à interpretação de exames com inteligência artificial. Menos tempo em tarefa repetitiva, mais presença com o paciente.
          </p>
        </div>
      </div>
    </section>
  );
}
