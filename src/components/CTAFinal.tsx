interface CTAFinalProps {
  onOpenModal: () => void;
}

export default function CTAFinal({ onOpenModal }: CTAFinalProps) {
  return (
    <section className="cta-final">
      <div className="container reveal active">
        <h2 className="font-display">Comece a atender com mais inteligência.</h2>
        <p>Entre na lista de espera e garanta acesso antecipado com condições especiais para os primeiros usuários.</p>
        <button className="btn btn-white" onClick={onOpenModal}>Quero meu acesso antecipado</button>
        <div className="cta-note">Sem compromisso. Cancele quando quiser.</div>
      </div>
    </section>
  );
}
