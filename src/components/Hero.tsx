import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current && videoRef.current && videoRef.current.duration) {
            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const scrollDistance = -top;
            const scrollableHeight = height - windowHeight;

            if (scrollDistance >= 0 && scrollDistance <= scrollableHeight) {
              const progress = scrollDistance / scrollableHeight;
              videoRef.current.currentTime = progress * videoRef.current.duration;
            } else if (scrollDistance < 0) {
              videoRef.current.currentTime = 0;
            } else if (scrollDistance > scrollableHeight) {
              videoRef.current.currentTime = videoRef.current.duration;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const scrollSpeed = 100;
  const trackHeight = videoDuration > 0 ? `calc(100vh + ${videoDuration * scrollSpeed}px)` : '400vh';

  return (
    <div className="hero-scroll-track" ref={containerRef} style={{ height: trackHeight }}>
      <header className="hero sticky-hero">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          className="hero-video-bg"
          muted
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
        />
        <div className="hero-overlay"></div>
        <div className="container hero-grid-center">
          <div className="hero-content reveal active">
            <h1>A IA que entende seus exames. Você que cuida dos pacientes.</h1>
            <p>BG BodyGraph é o sistema clínico que lê PDFs de exames, calcula biomarcadores e gera insights nutricionais para que você foque no que realmente importa.</p>
            <div className="hero-cta">
              <button className="btn btn-primary cta-white-text" onClick={onOpenModal}>Entrar na lista de espera</button>
              <span className="hero-note">Sem cartão de crédito. Acesso antecipado com desconto.</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
