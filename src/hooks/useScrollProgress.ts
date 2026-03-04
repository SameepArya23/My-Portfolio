import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      
      if (Math.abs(newProgress - progressRef.current) > 0.001) {
        progressRef.current = newProgress;
        setProgress(newProgress);
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return progress;
}

export function useInView(
  ref: React.RefObject<HTMLElement | null>,
  options?: { threshold?: number; rootMargin?: string }
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options?.threshold, options?.rootMargin]);

  return isInView;
}

export function useScrollAnimation(
  ref: React.RefObject<HTMLElement | null>,
  animationConfig: gsap.TweenVars
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tween = gsap.fromTo(
      element,
      { opacity: 0, y: 50, ...animationConfig.from },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        ...animationConfig.to,
      }
    );

    return () => {
      tween.kill();
    };
  }, [ref, animationConfig]);
}
