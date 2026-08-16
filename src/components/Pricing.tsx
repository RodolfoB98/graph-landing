import { useState, useEffect } from 'react';

export default function Pricing() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 900;

  const cardStyle = {
    background: '#ffffff',
    borderRadius: '18px',
    padding: '32px 28px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    border: '1px solid #e6ede4',
    boxSizing: 'border-box' as const,
  };

  const proCardStyle = {
    ...cardStyle,
    border: '2px solid #52a875',
    position: 'relative' as const,
    order: isMobile ? -1 : 0,
  };

  const eyebrowStyle = { fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#2e7d4f' };
  const priceStyle = { fontFamily: 'Fraunces, serif', fontSize: '40px', fontWeight: 600, color: '#0f3521', lineHeight: 1 };
  const suffixStyle = { fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#8aab80', marginLeft: '4px' };
  const strikethroughStyle = { fontFamily: 'Fraunces, serif', fontSize: '22px', color: '#b5cdb0', textDecoration: 'line-through', marginRight: '10px' };
  const legendStyle = { fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#8aab80', margin: '10px 0 24px', lineHeight: 1.5 };
  const itemStyle = { fontFamily: 'Inter, sans-serif', fontSize: '14.5px', color: '#3d5c39', lineHeight: 1.5 };
  const footerStyle = { fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#8aab80', lineHeight: 1.5, marginTop: '14px', textAlign: 'center' as const };
  
  const checkIcon = <span style={{ color: '#2e7d4f', fontWeight: 600, flexShrink: 0 }}>✓</span>;

  const btnOutlineStyle = {
    background: 'transparent',
    border: '1px solid #2e7d4f',
    color: '#2e7d4f',
    padding: '14px',
    borderRadius: '999px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '15px',
    textAlign: 'center' as const,
    display: 'block',
    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
    transition: 'background 0.2s ease'
  };

  const btnSolidStyle = {
    ...btnOutlineStyle,
    background: '#2e7d4f',
    color: '#ffffff',
    border: 'none',
  };

  return (
    <section className="pricing" id="precos">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Simples, transparente, justo.</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.7)', margin: '12px auto 48px', maxWidth: '480px', textAlign: 'center' }}>
            Escolha o plano do seu momento na profissão.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px', maxWidth: '1080px', margin: '0 auto', alignItems: 'stretch' }}>
          
          {/* Card 1: Estudante */}
          <div style={cardStyle} className="reveal active">
            <span style={eyebrowStyle}>ESTUDANTE</span>
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '12px' }}>
              <span style={priceStyle}>R$ 0</span>
              <span style={suffixStyle}>/mês</span>
            </div>
            <p style={legendStyle}>Para quem está nos dois últimos períodos da graduação ou já em estágio supervisionado.</p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Acesso completo à plataforma</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Pacientes e prescrições ilimitados</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Avaliação antropométrica e leitura de exames</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Bia, a assistente de IA biomédica</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Sem cartão de crédito</span></li>
            </ul>

            <div style={{ marginTop: 'auto' }}>
              <a 
                href="https://www.instagram.com/bg.bodygraph/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={btnOutlineStyle}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f7f9f6'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                onFocus={(e) => e.currentTarget.style.background = '#f7f9f6'}
                onBlur={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Solicitar no Instagram
              </a>
              <p style={footerStyle}>Envie uma mensagem com o nome da faculdade e o período em curso. Uso educacional e para prática supervisionada. A liberação é feita manualmente.</p>
            </div>
          </div>

          {/* Card 2: PRO */}
          <div style={proCardStyle} className="reveal active">
            <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#2e7d4f', color: '#ffffff', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, padding: '5px 16px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
              Oferta de fundador
            </div>
            <span style={eyebrowStyle}>BODYGRAPH PRO</span>
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '12px' }}>
              <span style={strikethroughStyle}>R$ 99</span>
              <span style={priceStyle}>R$ 59</span>
              <span style={suffixStyle}>/mês</span>
            </div>
            <p style={legendStyle}>Oferta de fundador, 10 primeiras vagas. Preço mantido enquanto a assinatura estiver ativa.</p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Pacientes ilimitados</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Avaliações antropométricas completas</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Exames laboratoriais e relatórios com IA</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Prescrição dietética (base TACO)</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Questionários pré-consulta</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Agenda completa integrada</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Portal exclusivo para o paciente</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Bia (Assistente IA Biomédica)</span></li>
            </ul>

            <div style={{ marginTop: 'auto' }}>
              <a 
                href="https://app.bodygraph.com.br/?onboarding=1" 
                style={btnSolidStyle}
                onMouseEnter={(e) => e.currentTarget.style.background = '#52a875'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#2e7d4f'}
                onFocus={(e) => e.currentTarget.style.background = '#52a875'}
                onBlur={(e) => e.currentTarget.style.background = '#2e7d4f'}
              >
                Começar grátis por 30 dias
              </a>
              <p style={footerStyle}>30 dias sem cartão de crédito. Depois, R$ 59/mês se quiser continuar. Cancele quando quiser.</p>
            </div>
          </div>

          {/* Card 3: Recém-formado */}
          <div style={cardStyle} className="reveal active">
            <span style={eyebrowStyle}>RECÉM-FORMADO</span>
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '12px' }}>
              <span style={priceStyle}>R$ 29,50</span>
              <span style={suffixStyle}>/mês</span>
            </div>
            <p style={legendStyle}>50% de desconto nos 12 primeiros meses para quem se formou há menos de um ano.</p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Todos os recursos do plano PRO</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Desconto aplicado por 12 meses</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Válido na primeira assinatura</span></li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>{checkIcon} <span style={itemStyle}>Sem fidelidade, cancele quando quiser</span></li>
            </ul>

            <div style={{ marginTop: 'auto' }}>
              <a 
                href="https://www.instagram.com/bg.bodygraph/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={btnOutlineStyle}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f7f9f6'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                onFocus={(e) => e.currentTarget.style.background = '#f7f9f6'}
                onBlur={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Solicitar no Instagram
              </a>
              <p style={footerStyle}>Envie uma mensagem com o nome da faculdade e o ano de formatura. Ao fim dos 12 meses, a assinatura passa para o valor vigente do plano PRO.</p>
            </div>
          </div>

        </div>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', margin: '40px auto 0', maxWidth: '560px' }}>
          Depois de fechadas as 10 vagas de fundador, o PRO passa a R$ 99/mês ou R$ 89/mês no plano anual.
        </p>
      </div>
    </section>
  );
}
