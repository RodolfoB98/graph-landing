import { useState } from 'react';

const faqs = [
  {
    question: "Como funciona a extração de exames por PDF?",
    answer: "Você faz o upload do PDF do laboratório, nossa IA lê e extrai automaticamente todos os biomarcadores, já com os valores de referência por sexo e faixa etária."
  },
  {
    question: "Preciso instalar alguma coisa?",
    answer: "Não. O BG BodyGraph é 100% web, acessa pelo navegador em qualquer dispositivo, seja no seu computador do consultório ou no tablet/celular."
  },
  {
    question: "Meus dados são seguros?",
    answer: "Sim. Usamos autenticação JWT, banco de dados com Row Level Security e os dados de cada profissional são isolados por padrão, seguindo as melhores práticas de segurança e LGPD."
  },
  {
    question: "O que é o agente IA biomédico?",
    answer: "É um assistente contextualizado com os dados do paciente (exames, avaliações, histórico) que responde perguntas clínicas e ajuda na interpretação rápida de resultados complexos."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container faq-container">
        <div className="section-header reveal active">
          <h2>Perguntas Frequentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item reveal active ${activeIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5V19M5 12H19" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
