import { useEffect, useRef, useState } from 'react';

const isAndroidUA = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);

export default function Hero() {
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
    if (isAndroidUA) {
      // Free scroll on Android
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

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
    if (isAndroidUA || isVideoComplete) return;
    
    let newProgress = currentProgress.current + (diff * sensitivity);
    newProgress = Math.max(0, Math.min(1, newProgress));
    currentProgress.current = newProgress;
    
    window.requestAnimationFrame(() => {
      if (videoRef.current && videoRef.current.duration) {
        videoRef.current.currentTime = newProgress * videoRef.current.duration;
      }
      if (newProgress >= 0.98) {
        setIsVideoComplete(true);
      }
    });
  };

  // Synthetic touch scrub
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAndroidUA || isVideoComplete) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isAndroidUA || isVideoComplete) return;
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY; 
    advanceVideo(diff, 0.003); // swipe sensitivity
    touchStartY.current = touchY;
  };

  // Synthetic wheel scrub for desktop
  const handleWheel = (e: React.WheelEvent) => {
    if (isAndroidUA || isVideoComplete) return;
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
          autoPlay={isAndroidUA}
          loop={isAndroidUA}
        />
        <div className="hero-overlay"></div>
        <div className="container hero-grid-center">
          <div className="hero-content reveal active">
            <span className="hero-eyebrow">Plataforma para nutricionistas</span>
            <h1>Todo o seu consultório de nutrição em uma só plataforma.</h1>
            <p>Prescrição com base TACO, interpretação de exames por IA, avaliação nutricional e portal do paciente integrados, do primeiro atendimento ao acompanhamento.</p>
            <div className="hero-cta">
              <a href="https://app.bodygraph.com.br/?onboarding=1" className="btn btn-primary cta-white-text">Comece grátis por 30 dias &rarr;</a>
              <span className="hero-note">Sem cartão de crédito &middot; Cancele quando quiser</span>
            </div>
          </div>
        </div>

        {/* Continue indicator for swipe/scroll scrub */}
        {!isAndroidUA && (
          <div className={`hero-continue-indicator ${isVideoComplete ? 'visible' : ''}`}>
            <span>Continue</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        )}
      </header>
    </div>
  );
}
