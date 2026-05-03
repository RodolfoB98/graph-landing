import { useState, useRef, useEffect, useCallback } from 'react';

const featuresData = [
  {
    icon: <path d="M9 3H15M10 9H14M3 19.5L6 15M21 19.5L18 15M6 21H18C19.1046 21 20 20.1046 20 19V10L14.6569 4.65685C14.2817 4.28172 13.773 4.07107 13.2426 4.07107H10.7574C10.227 4.07107 9.71825 4.28172 9.34315 4.65685L4 10V19C4 20.1046 4.89543 21 6 21Z" strokeLinecap="round" strokeLinejoin="round" />,
    title: "Leitura de Exames por IA",
    desc: "Faça upload do PDF do laboratório e a IA extrai todos os biomarcadores automaticamente."
  },
  {
    icon: <path d="M12 20V10M18 20V4M6 20V16M4 20H20" strokeLinecap="round" strokeLinejoin="round" />,
    title: "Avaliação Nutricional",
    desc: "Pollock 7 dobras, IMC, RCQ, bioimpedância e cálculo de TMB/GET em uma tela."
  },
  {
    icon: <><path d="M4 19V5C4 3.89543 4.89543 3 6 3H16.1716C16.702 3 17.2107 3.21071 17.5858 3.58579L20.4142 6.41421C20.7893 6.78929 21 7.29799 21 7.82843V19C21 20.1046 20.1046 21 19 21H6C4.89543 21 4 20.1046 4 19Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 14H15M9 10H15" strokeLinecap="round" strokeLinejoin="round" /></>,
    title: "Prescrição Dietética",
    desc: "Monte planos alimentares com refeições, horários e itens e ative com um clique."
  },
  {
    icon: <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" strokeLinecap="round" strokeLinejoin="round" />,
    title: "Agenda Integrada",
    desc: "Gerencie consultas, retornos e exames sem sair do sistema."
  },
  {
    icon: <><path d="M9.66336 17.8239C8.38423 18.5724 6.84074 19 5.20001 19C5.20001 19 6.20001 16 6.20001 16C3.60699 14.281 2 11.3195 2 8.00001C2 3.58173 6.47715 0 12 0C17.5228 0 22 3.58173 22 8.00001C22 12.4183 17.5228 16 12 16C11.1969 16 10.4158 15.914 9.66336 17.8239Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 8H15.01M12 8H12.01M9 8H9.01" strokeLinecap="round" strokeLinejoin="round" /></>,
    title: "Agente IA Biomédico",
    desc: "Converse com uma IA contextualizada com os dados do paciente para obter insights clínicos."
  },
  {
    icon: <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M9 14L11 16L15 12" strokeLinecap="round" strokeLinejoin="round" />,
    title: "Questionários Pré-Consulta",
    desc: "Envie formulários personalizados ao paciente antes da consulta e receba as respostas."
  },
  {
    icon: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></>,
    title: "Portal do Paciente",
    desc: "Gere um link exclusivo para seu paciente acessar o plano alimentar, exames, evolução, fotos e diário — sem precisar de login."
  }
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Speed of auto-scroll (px per frame, ~60fps) -> approx 40px/s is 0.66
  const scrollSpeed = 0.66;

  const animate = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;
    
    // Only auto-scroll if not dragging and not hovered
    if (!isDragging && !isHovered) {
      containerRef.current.scrollLeft += scrollSpeed;
    }

    // Infinite loop check
    const trackWidth = trackRef.current.scrollWidth / 2; // Half width is the original set
    if (containerRef.current.scrollLeft >= trackWidth) {
      containerRef.current.scrollLeft -= trackWidth;
    } else if (containerRef.current.scrollLeft <= 0) {
      // If manually dragged past the left edge, wrap around
      containerRef.current.scrollLeft += trackWidth;
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [isDragging, isHovered]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Drag sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Duplicate array for seamless infinite scroll
  const duplicatedFeatures = [...featuresData, ...featuresData];

  return (
    <section className="features">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Cada detalhe do seu paciente, em um só lugar</h2>
        </div>

        <div className="feature-showcase reveal active" style={{ transitionDelay: '0.1s' }}>
          <video
            src="/icons.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="feature-showcase-video"
          />
        </div>
      </div>

      {/* Marquee Carousel - Full width */}
      <div 
        className="carousel-viewport"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); handleMouseUpOrLeave(); }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUpOrLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="carousel-track" ref={trackRef}>
          {duplicatedFeatures.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">{item.icon}</svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
