export default function ProductShowcase() {
  return (
    <section className="product-showcase" id="produto">
      <div className="container">
        <div className="section-header">
          <h2>Veja o BG BodyGraph por dentro</h2>
          <p className="showcase-subtitle">Ferramentas reais, pensadas para o fluxo de trabalho do nutricionista.</p>
        </div>

        <div className="showcase-row reveal active">
          <div className="showcase-text">
            <span className="showcase-eyebrow">Prescrição dietética</span>
            <h3>Modelos clínicos com macros calculadas na base TACO.</h3>
            <p>Escolha um modelo (emagrecimento, ganho de massa, controle glicêmico) e as macros são calculadas automaticamente pela Tabela TACO (UNICAMP/NEPA). Prescrição completa, pronta para o portal do paciente.</p>
          </div>
          <div className="showcase-image">
            <img src="/DIETA-SITE.png" alt="Seleção de modelos de dieta com macros calculadas pela base TACO" loading="lazy" />
          </div>
        </div>

        <div className="showcase-row reverse reveal active">
          <div className="showcase-text">
            <span className="showcase-eyebrow">Inteligência Bia</span>
            <h3>Interpretação de exames com conduta sugerida.</h3>
            <p>A Bia lê os biomarcadores, sinaliza o que está fora da referência e sugere condutas alimentares contextualizadas. Toda análise reforça a investigação clínica com o profissional de saúde.</p>
          </div>
          <div className="showcase-image">
            <img src="/BIA-SITE.png" alt="Interface da Bia interpretando ferritina elevada com sugestão de conduta" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
