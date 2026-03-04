import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  { text: 'const developer = {', color: 'text-purple-400' },
  { text: '  name: "Sameep Arya",', color: 'text-green-400' },
  { text: '  role: "Frontend Engineer",', color: 'text-green-400' },
  { text: '  skills: ["React", "TypeScript", "Node"],', color: 'text-yellow-400' },
  { text: '  passion: "Building amazing UX",', color: 'text-green-400' },
  { text: '  experience: 3+,', color: 'text-blue-400' },
  { text: '  available: true', color: 'text-orange-400' },
  { text: '};', color: 'text-purple-400' },
];

export function AnimatedCodeBlock() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 rounded-t-xl border border-slate-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="ml-4 text-xs text-slate-500 font-mono">developer.ts</div>
      </div>

      {/* Code Content */}
      <div className="bg-slate-900/90 backdrop-blur-sm rounded-b-xl border border-t-0 border-slate-700/50 p-4 font-mono text-sm overflow-hidden">
        <div className="space-y-1">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: index < visibleLines ? 1 : 0,
                x: index < visibleLines ? 0 : -10
              }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <span className="text-slate-600 w-6 text-right mr-4 select-none">
                {index + 1}
              </span>
              <span className={line.color}>{line.text}</span>
              {index === visibleLines - 1 && (
                <motion.span
                  animate={{ opacity: cursorVisible ? 1 : 0 }}
                  className="w-2 h-5 bg-indigo-500 ml-0.5"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
    </motion.div>
  );
}
