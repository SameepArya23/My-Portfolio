export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mastering React Server Components",
    excerpt: "A deep dive into React Server Components and how they can improve your application's performance and user experience.",
    content: `
# Mastering React Server Components

React Server Components (RSC) represent a paradigm shift in how we build React applications. They allow components to render exclusively on the server, reducing the amount of JavaScript sent to the client.

## What Are Server Components?

Server Components are React components that execute only on the server. They can access server-side resources directly, like databases or file systems, and they never ship their code to the client.

\`\`\`tsx
// This is a Server Component
async function BlogPosts() {
  const posts = await db.posts.findMany();
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

## Benefits

1. **Zero Bundle Size**: Server Components aren't included in the JavaScript bundle
2. **Direct Backend Access**: Query databases directly from your components
3. **Automatic Code Splitting**: Client components imported by server components are automatically split
4. **Improved Initial Page Load**: Less JavaScript to download and execute

## When to Use Server Components

- Data fetching components
- Components that don't need interactivity
- Components that access backend resources
- Layout components that wrap pages

## Best Practices

Always keep server components pure and avoid using browser APIs or React hooks that depend on the client environment.
    `,
    author: "Sameep Arya",
    date: "2024-02-15",
    readTime: "8 min read",
    tags: ["React", "Performance", "Architecture"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    slug: "mastering-react-server-components"
  },
  {
    id: "2",
    title: "The Future of CSS: Tailwind vs CSS-in-JS",
    excerpt: "Comparing modern CSS approaches and understanding when to use each methodology in your projects.",
    content: `
# The Future of CSS: Tailwind vs CSS-in-JS

The CSS landscape has evolved dramatically over the past few years. Two approaches have emerged as dominant forces: Utility-First CSS (Tailwind) and CSS-in-JS (Styled Components, Emotion).

## Tailwind CSS

Tailwind CSS has revolutionized how we write styles by providing utility classes that can be composed directly in markup.

### Pros:
- Rapid development
- Consistent design system
- Small bundle size (with PurgeCSS)
- No runtime overhead

### Cons:
- HTML can become verbose
- Learning curve for class names
- Can be harder to maintain for complex components

## CSS-in-JS

CSS-in-JS allows you to write CSS directly in your JavaScript files, providing component-scoped styles.

### Pros:
- Scoped styles by default
- Dynamic styling based on props
- Better TypeScript support
- Co-location of styles and logic

### Cons:
- Runtime overhead
- Larger bundle sizes
- Potential performance issues at scale

## My Recommendation

For most projects, I recommend Tailwind CSS for its simplicity and performance benefits. However, CSS-in-JS still has its place for highly dynamic components.
    `,
    author: "Sameep Arya",
    date: "2024-02-08",
    readTime: "6 min read",
    tags: ["CSS", "Tailwind", "Styled Components"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
    slug: "future-of-css-tailwind-vs-css-in-js"
  },
  {
    id: "3",
    title: "Building Accessible Forms: A Complete Guide",
    excerpt: "Learn how to create forms that are accessible to all users, including those using screen readers and keyboard navigation.",
    content: `
# Building Accessible Forms: A Complete Guide

Accessibility in web forms is crucial for ensuring all users can interact with your application. Let's explore best practices for building accessible forms.

## Semantic HTML

Always use proper HTML elements for forms:

\`\`\`html
<form>
  <label for="email">Email Address</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    required
    aria-describedby="email-error"
  />
  <span id="email-error" role="alert"></span>
</form>
\`\`\`

## Key Principles

1. **Use Labels**: Every input needs an associated label
2. **Error Messages**: Provide clear, helpful error messages
3. **Keyboard Navigation**: Ensure all fields are keyboard accessible
4. **Focus Indicators**: Make focus states visible
5. **ARIA Attributes**: Use appropriate ARIA labels and descriptions

## Validation and Error Handling

\`\`\`tsx
function AccessibleInput({ label, error, ...props }) {
  const id = useId();
  const errorId = \`\${id}-error\`;
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <span id={errorId} role="alert" className="error">
          {error}
        </span>
      )}
    </div>
  );
}
\`\`\`

## Testing Accessibility

Use tools like:
- axe DevTools
- Lighthouse
- Screen readers (NVDA, VoiceOver)
- Keyboard-only navigation
    `,
    author: "Sameep Arya",
    date: "2024-01-25",
    readTime: "10 min read",
    tags: ["Accessibility", "Forms", "HTML"],
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop",
    slug: "building-accessible-forms"
  },
  {
    id: "4",
    title: "TypeScript Advanced Patterns",
    excerpt: "Explore advanced TypeScript patterns that will make your code more robust and maintainable.",
    content: `
# TypeScript Advanced Patterns

TypeScript offers powerful type system features that can significantly improve code quality. Let's explore some advanced patterns.

## Discriminated Unions

\`\`\`typescript
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'triangle'; base: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    case 'triangle':
      return (shape.base * shape.height) / 2;
  }
}
\`\`\`

## Template Literal Types

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;
// Result: 'onClick' | 'onMousedown' | 'onMouseup'
\`\`\`

## Conditional Types

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type ExtractArray<T> = T extends (infer U)[] ? U : never;
\`\`\`

## Utility Types

Master built-in utility types:
- Partial<T>
- Required<T>
- Pick<T, K>
- Omit<T, K>
- Record<K, T>
- ReturnType<T>

## Best Practices

1. Use strict mode
2. Avoid 'any' type
3. Leverage type inference
4. Create reusable type utilities
    `,
    author: "Sameep Arya",
    date: "2024-01-18",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript", "Patterns"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    slug: "typescript-advanced-patterns"
  },
  {
    id: "5",
    title: "State Management in 2024",
    excerpt: "Comparing modern state management solutions: Zustand, Jotai, Valtio, and when to use each.",
    content: `
# State Management in 2024

The state management landscape has evolved significantly. Let's compare the top modern solutions.

## Zustand

A small, fast, and scalable state management solution.

\`\`\`typescript
import { create } from 'zustand';

interface BearState {
  bears: number;
  increase: () => void;
}

const useStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));
\`\`\`

### Pros:
- Minimal boilerplate
- No providers needed
- Excellent TypeScript support
- Small bundle size (~1KB)

## Jotai

Primitive and flexible state management for React.

\`\`\`typescript
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\`

### Pros:
- Atomic approach
- Automatic optimization
- Derived atoms
- Async support

## Valtio

Proxy-based state management.

\`\`\`typescript
import { proxy, useSnapshot } from 'valtio';

const state = proxy({ count: 0 });

function Counter() {
  const snap = useSnapshot(state);
  return <button onClick={() => state.count++}>{snap.count}</button>;
}
\`\`\`

### Pros:
- Mutable updates
- Automatic re-renders
- Simple API

## My Recommendation

- **Zustand**: Best for most applications
- **Jotai**: Best for atomic state needs
- **Valtio**: Best for those who prefer mutable updates
    `,
    author: "Sameep Arya",
    date: "2024-01-10",
    readTime: "5 min read",
    tags: ["React", "State Management", "Zustand"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
    slug: "state-management-2024"
  },
  {
    id: "6",
    title: "Performance Optimization Techniques",
    excerpt: "Essential techniques for optimizing React application performance, from code splitting to memoization.",
    content: `
# Performance Optimization Techniques

Performance is crucial for user experience. Here are essential techniques for optimizing React applications.

## Code Splitting

\`\`\`tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## Memoization

\`\`\`tsx
import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data, onUpdate }) {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]);

  const handleClick = useCallback(() => {
    onUpdate(processedData);
  }, [onUpdate, processedData]);

  return <div onClick={handleClick}>{/* ... */}</div>;
});
\`\`\`

## Virtualization

For long lists, use virtualization:

\`\`\`tsx
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  return (
    <FixedSizeList
      height={500}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </FixedSizeList>
  );
}
\`\`\`

## Image Optimization

- Use WebP format
- Implement lazy loading
- Use appropriate sizes
- Consider using a CDN

## Measuring Performance

- React DevTools Profiler
- Lighthouse
- Web Vitals
- Chrome DevTools Performance tab
    `,
    author: "Sameep Arya",
    date: "2024-01-05",
    readTime: "9 min read",
    tags: ["Performance", "React", "Optimization"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    slug: "performance-optimization-techniques"
  }
];
