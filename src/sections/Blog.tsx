import { useState, useRef, useMemo } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Clock, ArrowRight, Tag, X } from 'lucide-react';
import { blogPosts } from '../data/blog';

const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort();

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        selectedTag === null || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Blog
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts on frontend development, best practices, and lessons learned
            from building modern web applications.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-secondary/20 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-ring/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/30 text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/30 text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl card-hover">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-display font-bold text-card-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

interface BlogPostModalProps {
  post: typeof blogPosts[0];
  onClose: () => void;
}

function BlogPostModal({ post, onClose }: BlogPostModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Simple markdown-like parsing
  const parseContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let inCodeBlock = false;
    let codeContent = '';

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Code blocks
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={index}
              className="bg-background rounded-lg p-4 overflow-x-auto my-4 border border-border"
            >
              <code className="text-sm font-mono text-muted-foreground">{codeContent}</code>
            </pre>
          );
          codeContent = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      // Headings
      if (trimmedLine.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl font-display font-bold text-foreground mt-8 mb-4">
            {trimmedLine.slice(2)}
          </h1>
        );
        return;
      }

      if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
            {trimmedLine.slice(3)}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-display font-bold text-foreground mt-4 mb-2">
            {trimmedLine.slice(4)}
          </h3>
        );
        return;
      }

      // Lists
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        elements.push(
          <li key={index} className="text-foreground/80 ml-4 mb-1">
            {trimmedLine.slice(2)}
          </li>
        );
        return;
      }

      // Numbered lists
      if (/^\d+\.\s/.test(trimmedLine)) {
        elements.push(
          <li key={index} className="text-foreground/80 ml-4 mb-1 list-decimal">
            {trimmedLine.replace(/^\d+\.\s/, '')}
          </li>
        );
        return;
      }

      // Bold text
      const boldRegex = /\*\*(.*?)\*\*/g;
      const processedLine = trimmedLine.replace(boldRegex, '<strong>$1</strong>');

      // Regular paragraph
      if (trimmedLine) {
        elements.push(
          <p
            key={index}
            className="text-foreground/80 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
    });

    return elements;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border"
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-80">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="prose prose-invert max-w-none">
            {parseContent(post.content)}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
            <span className="text-muted-foreground text-sm">Thanks for reading!</span>
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Back to articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
