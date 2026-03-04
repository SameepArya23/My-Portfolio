import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Palette,
  Zap,
  Layers,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  Globe,
  Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'TypeScript', icon: Terminal },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Next.js', icon: Globe },
    ],
  },
  {
    title: 'State Management',
    skills: [
      { name: 'Zustand', icon: Layers },
      { name: 'Redux', icon: Database },
      { name: 'React Query', icon: Zap },
    ],
  },
  {
    title: 'API & Backend',
    skills: [
      { name: 'REST APIs', icon: Globe },
      { name: 'GraphQL', icon: Database },
      { name: 'Node.js', icon: Terminal },
    ],
  },
  {
    title: 'Engineering',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Testing', icon: Shield },
      { name: 'Performance', icon: Cpu },
    ],
  },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: 'ARCH', label: 'Production Architecture' },
  { value: 'PERF', label: 'Performance Optimized' },
  { value: 'E2E', label: 'Feature Ownership' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!headingRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-heading-line',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Large Typography */}
          <div ref={headingRef} className="relative">
            <div className="space-y-2">
              {['I', 'BUILD', 'SCALABLE', 'WEB', 'APPS'].map((word, index) => (
                <div
                  key={index}
                  className="about-heading-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight"
                  style={{
                    color: index % 2 === 0 ? 'hsl(var(--foreground))' : 'transparent',
                    WebkitTextStroke: index % 2 === 0 ? 'none' : '2px hsl(var(--primary) / 0.5)',
                  }}
                >
                  {word}
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    Sameep Arya
                  </h3>
                  <p className="text-muted-foreground">Frontend Engineer</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-foreground/80 leading-relaxed mb-8">
                With over 3 years of experience, I specialize in building performant,
                accessible, and visually stunning web applications. My passion lies in
                creating seamless user experiences through clean code and modern
                architecture patterns.
              </p>

              {/* Skills Grid */}
              <div className="space-y-6">
                {skillCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + catIndex * 0.1, duration: 0.5 }}
                  >
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="tech-icon flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                        >
                          <skill.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm text-foreground/80">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-8 pt-6 border-t border-border"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                >
                  <span>Let's work together</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
