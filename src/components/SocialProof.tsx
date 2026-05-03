import { useEffect, useRef } from 'react';

function animateCounter(element: HTMLElement, target: number) {
  let start = 0;
  const duration = 2000;
  const stepTime = Math.abs(Math.floor(duration / target));

  const timer = setInterval(() => {
    start += 1;
    element.innerText = start.toString();
    if (start >= target) {
      clearInterval(timer);
      if (target === 50) element.innerText = "50+";
      if (target === 100) element.innerText = "100%";
    }
  }, stepTime);
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numbers = entry.target.querySelectorAll('.number');
          numbers.forEach((numEl: any) => {
            if (!numEl.dataset.counted) {
              const target = parseInt(numEl.dataset.target, 10);
              animateCounter(numEl, target);
              numEl.dataset.counted = true;
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="social-proof">
      <div className="container metrics-grid" ref={sectionRef}>
        <div className="metric-item reveal active">
          <span className="number" data-target="50">0</span>
          <span className="label">biomarcadores catalogados</span>
        </div>
        <div className="metric-item reveal active" style={{ transitionDelay: '0.1s' }}>
          <span className="number" data-target="10">0</span>
          <span className="label">segundos para análise</span>
        </div>
        <div className="metric-item reveal active" style={{ transitionDelay: '0.2s' }}>
          <span className="number" data-target="100">0</span>
          <span className="label">extração automática de PDFs</span>
        </div>
      </div>
    </section>
  );
}
