import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Twitter, MapPin, CheckCircle } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/SameepArya23', color: 'hover:text-foreground' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/sameeparya', color: 'hover:text-accent' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/sameep96023', color: 'hover:text-accent' },
  { name: 'Email', icon: Mail, url: 'mailto:sameeparya02@gmail.com', color: 'hover:text-primary' },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Get in Touch
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Let's Create Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Currently seeking full-time frontend engineering roles. I am eager to contribute
            my skills to a forward-thinking team. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Let's Talk
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:sameeparya02@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    sameeparya02@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Indore, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-secondary/20 border border-border flex items-center justify-center text-muted-foreground ${social.color} hover:bg-primary/20 hover:border-primary/50 transition-all`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            {/* <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-sm font-medium">
                Actively Looking for Roles
              </span>
            </div> */}
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focusedField === 'name' || formData.name ? -24 : 0,
                    scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                    color: focusedField === 'name' ? '#a50044' : 'hsl(var(--muted-foreground))',
                  }}
                  className="absolute left-0 top-3 origin-left pointer-events-none transition-colors"
                >
                  Your Name
                </motion.label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full pt-3 pb-2 bg-transparent border-b-2 border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focusedField === 'email' || formData.email ? -24 : 0,
                    scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                    color: focusedField === 'email' ? '#a50044' : 'hsl(var(--muted-foreground))',
                  }}
                  className="absolute left-0 top-3 origin-left pointer-events-none transition-colors"
                >
                  Email Address
                </motion.label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full pt-3 pb-2 bg-transparent border-b-2 border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focusedField === 'message' || formData.message ? -24 : 0,
                    scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                    color: focusedField === 'message' ? '#a50044' : 'hsl(var(--muted-foreground))',
                  }}
                  className="absolute left-0 top-3 origin-left pointer-events-none transition-colors"
                >
                  Your Message
                </motion.label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full pt-3 pb-2 bg-transparent border-b-2 border-border text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-primary hover:opacity-90 text-primary-foreground hover:shadow-glow'
                  }`}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
