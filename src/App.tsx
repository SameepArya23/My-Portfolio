import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import './App.css';

// Sections
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Navigation } from './sections/Navigation';
import { Projects } from './sections/Projects';

// Hooks
import { useScrollProgress } from './hooks/useScrollProgress';

gsap.registerPlugin(ScrollTrigger);

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (circleRef.current) {
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (newProgress / 100) * circumference;
        circleRef.current.style.strokeDashoffset = offset.toString();
      }

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(onComplete, 300);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
    >
      {/* Logo */}
      {/* <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white">
          S
        </div>
      </motion.div> */}

      {/* Progress Circle */}
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
          />
          {/* Progress Circle */}
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45}
            style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
          />
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a50044" />
              <stop offset="100%" stopColor="#004d98" />
            </linearGradient>
          </defs>
        </svg>

        {/* Progress Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-display font-bold text-white">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-muted-foreground text-sm"
      >
        Loading experience...
      </motion.p>
    </motion.div>
  );
}

// Progress Bar Component
function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX: progress }}
    />
  );
}

// Custom Cursor Component
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    const checkTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(checkTouch);
    if (checkTouch) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Instant dot movement
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };

    // Smooth cursor animation
    const animateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    };

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isHoverable);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={cursorRef}
        className={`custom-cursor hidden md:block ${isHovering ? 'hover' : ''}`}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.3s',
        }}
      />
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className="hidden md:block"
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          backgroundColor: 'hsl(var(--primary))',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
        }}
      />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress Bar */}
          <ProgressBar />

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main ref={mainRef} className="relative">
            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Sections */}
            <Hero />
            <About />
            <Projects />
            {/* <Blog /> */}
            <Contact />
            <Footer />
          </main>
        </motion.div>
      )}
    </>
  );
}

export default App;
