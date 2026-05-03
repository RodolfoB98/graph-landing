import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const unlockVideo = () => {
      if (videoRef.current) {
        // Force load and play/pause to unlock video on iOS
        videoRef.current.load();
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            if (videoRef.current) videoRef.current.pause();
          }).catch(() => {});
        }
      }
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('click', unlockVideo);
    };

    window.addEventListener('touchstart', unlockVideo, { once: true, passive: true });
    window.addEventListener('click', unlockVideo, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('click', unlockVideo);
    };
  }, []);

  const [isVideoComplete, setIsVideoComplete] = useState(false);
  const touchStartY = useRef(0);
  const currentProgress = useRef(0);

  // Global scroll locking and rewind logic
  useEffect(() => {
    if (!isVideoComplete) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    const handleScrollRewind = () => {
      if (isVideoComplete && window.scrollY <= 10) {
        setIsVideoComplete(false);
        // Reset progress slightly so they can scroll back down to unlock
        currentProgress.current = 0.95; 
        if (videoRef.current) {
          videoRef.current.currentTime = 0.95 * videoRef.current.duration;
        }
      }
    };

    window.addEventListener('scroll', handleScrollRewind, { passive: true });
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('scroll', handleScrollRewind);
    };
  }, [isVideoComplete]);

  const advanceVideo = (diff: number, sensitivity: number) => {
    if (isVideoComplete || !videoRef.current || !videoRef.current.duration) return;
    
    let newProgress = currentProgress.current + (diff * sensitivity);
    newProgress = Math.max(0, Math.min(1, newProgress));
    currentProgress.current = newProgress;
    
    window.requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = newProgress * videoRef.current.duration;
        if (newProgress >= 0.98) {
          setIsVideoComplete(true);
        }
      }
    });
  };

  // Synthetic touch scrub
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isVideoComplete) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isVideoComplete) return;
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY; 
    advanceVideo(diff, 0.003); // swipe sensitivity
    touchStartY.current = touchY;
  };

  // Synthetic wheel scrub for desktop
  const handleWheel = (e: React.WheelEvent) => {
    if (isVideoComplete) return;
    advanceVideo(e.deltaY, 0.0005); // wheel sensitivity
  };

  // Track height is strictly 100svh. No white space below.
  const trackHeight = '100svh';

  return (
    <div 
      className="hero-scroll-track" 
      ref={containerRef} 
      style={{ height: trackHeight }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onWheel={handleWheel}
    >
      <header className="hero sticky-hero">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          className="hero-video-bg"
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
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

        {/* Continue indicator for swipe/scroll scrub */}
        <div className={`hero-continue-indicator ${isVideoComplete ? 'visible' : ''}`}>
          <span>Continue</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </header>
    </div>
  );
}
