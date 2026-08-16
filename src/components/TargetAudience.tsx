export default function TargetAudience() {
  return (
    <section 
      className="target"
      style={{ padding: '96px 24px' }}
    >
      <div className="container" style={{ padding: 0 }}>
        <div className="section-header reveal active">
          <h2>Feito para quem cuida de pessoas.</h2>
        </div>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px', 
            maxWidth: '1100px', 
            margin: '0 auto', 
            alignItems: 'stretch' 
          }}
        >
          <div style={{ background: '#f7f9f6', border: '1px solid #e6ede4', borderRadius: '14px', padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '19px', fontWeight: 600, color: '#0f3521', margin: '0 0 10px' }}>Profissionais solo</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400, color: '#5c7a58', lineHeight: 1.6, margin: 0 }}>
              Nutricionistas e médicos que atendem sozinhos e precisam de eficiência na rotina, sem a complexidade de sistemas antigos.
            </p>
          </div>
          <div style={{ background: '#f7f9f6', border: '1px solid #e6ede4', borderRadius: '14px', padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '19px', fontWeight: 600, color: '#0f3521', margin: '0 0 10px' }}>Estudantes de nutrição</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400, color: '#5c7a58', lineHeight: 1.6, margin: 0 }}>
              Acesso gratuito para quem está em formação. Treine avaliação antropométrica, prescrição e leitura de exames na mesma ferramenta que vai usar no consultório.
            </p>
          </div>
          <div style={{ background: '#f7f9f6', border: '1px solid #e6ede4', borderRadius: '14px', padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '19px', fontWeight: 600, color: '#0f3521', margin: '0 0 10px' }}>Consultórios pequenos</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400, color: '#5c7a58', lineHeight: 1.6, margin: 0 }}>
              Múltiplos profissionais na mesma organização, com pacientes, agenda e prescrições separados por usuário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
