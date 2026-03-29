import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import resumePdf from '../assets/Sameep_Arya_Resume_2026.pdf';
import { CustomCursor } from '../App';

export function ResumePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sameep Arya | Resume';
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Sameep_Arya_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Portfolio
        </button>

        <span className="text-sm font-display font-semibold text-foreground hidden sm:block">
          Sameep Arya — Resume
        </span>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-1.5 bg-primary hover:opacity-90 text-primary-foreground text-sm font-medium rounded-full transition-all hover:shadow-glow"
        >
          <Download size={14} />
          Download
        </button>
      </motion.div>

      {/* Resume iframe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-[56px] w-full h-screen"
      >
        <iframe
          src="/resume.html"
          title="Sameep Arya Resume"
          className="w-full h-full border-0"
          style={{ minHeight: 'calc(100vh - 56px)' }}
        />
      </motion.div>
    </div>
  );
}
