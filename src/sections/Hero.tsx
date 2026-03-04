import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ParticleBackground } from '../components/effects/ParticleBackground';
import { AnimatedCodeBlock } from '../components/effects/AnimatedCodeBlock';

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Split text animation for heading
    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }

    if (subheadingRef.current) {
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: 'power2.out' }
      );
    }
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headingWords = ['Crafting', 'Digital', 'Experiences'];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      {/* Hero radial glow — subtle Blaugrana lighting behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 60%, hsl(337 100% 32% / 0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-primary">Open to Full-Time Opportunities</span>
            </motion.div> */}

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6"
              style={{ perspective: '1000px' }}
            >
              {headingWords.map((word, index) => (
                <span
                  key={index}
                  className="word inline-block mr-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheading */}
            <p
              ref={subheadingRef}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Frontend Engineer &amp; UI Architect specializing in building scalable,
              performant web applications with React and TypeScript.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                onClick={() => handleScrollTo('#projects')}
                className="px-8 py-4 bg-primary hover:opacity-90 text-primary-foreground font-medium rounded-full transition-all hover:shadow-glow-lg flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => handleScrollTo('#blog')}
                className="px-8 py-4 bg-secondary/30 hover:bg-secondary/60 text-foreground font-medium rounded-full border border-border transition-all flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Blog
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:sameeparya02@gmail.com', label: 'Email' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-primary/20 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Code Block */}
          <div className="hidden lg:block">
            <AnimatedCodeBlock />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
