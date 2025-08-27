# Project Architecture & Folder Structure

## 📁 Enhanced Folder Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── (pages)/                  # Route groups for organization
│   │   ├── about/                # Company information
│   │   ├── blog/                 # Industry insights and articles
│   │   ├── contact/              # Contact information and form
│   │   ├── privacy/              # Privacy policy page
│   │   ├── products/             # Medical products showcase
│   │   ├── services/             # IT consulting services
│   │   └── terms/                # Terms of service page
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # Search engine crawler directives
│   └── sitemap.ts                # Dynamic sitemap generation
├── components/                   # Reusable UI components
│   ├── layout/                   # Layout-specific components
│   │   ├── ClientLayout.tsx      # Client-side layout wrapper
│   │   ├── Footer.tsx            # Site footer with navigation
│   │   └── Header.tsx            # Site header with navigation
│   ├── AnimatedTitle.tsx         # Animated text component
│   ├── BackToTopButton.tsx       # Floating back-to-top button
│   └── SEOScript.tsx             # JSON-LD structured data injection
├── constants/                    # Application constants
│   └── seo.ts                    # SEO metadata and configuration
├── hooks/                        # Custom React hooks
│   ├── useClient.ts              # Client-side rendering utilities
│   ├── useScrollToTop.ts         # Scroll-to-top functionality
│   └── index.ts                  # Hook exports
├── lib/                          # Core utilities and configurations
│   ├── seo.ts                    # SEO utilities and schema generation
│   └── theme.ts                  # Material-UI theme configuration
├── types/                        # TypeScript type definitions
│   └── common.ts                 # Shared types and interfaces
└── utils/                        # Utility functions
    ├── dateUtils.ts              # Date formatting utilities
    ├── validation.ts             # Form validation functions
    └── index.ts                  # General utility functions
```

## 🏗️ Architecture Principles

### 1. **Separation of Concerns**

- **Components**: Pure UI components with minimal business logic
- **Hooks**: Reusable stateful logic
- **Utils**: Pure functions for data transformation
- **Lib**: Core configurations and complex utilities
- **Types**: TypeScript definitions for type safety

### 2. **Path Alias Configuration**

```typescript
// tsconfig.json paths
{
  "@/*": ["./src/*"],
  "@/components/*": ["./src/components/*"],
  "@/lib/*": ["./src/lib/*"],
  "@/constants/*": ["./src/constants/*"],
  "@/types/*": ["./src/types/*"],
  "@/hooks/*": ["./src/hooks/*"],
  "@/utils/*": ["./src/utils/*"]
}
```

### 3. **Import Standards**

```typescript
// ✅ Good - Using path aliases
import { useScrollToTop } from "@/hooks";
import { validateContactForm } from "@/utils/validation";
import { SEO_DATA } from "@/constants/seo";

// ❌ Avoid - Relative imports for deep paths
import { useScrollToTop } from "../../../hooks/useScrollToTop";
```

### 4. **Component Organization**

#### **Layout Components**

- `ClientLayout.tsx`: Main layout wrapper with theme providers
- `Header.tsx`: Navigation and branding
- `Footer.tsx`: Site footer with links and information

#### **Feature Components**

- `AnimatedTitle.tsx`: Reusable animated text
- `BackToTopButton.tsx`: Scroll-to-top functionality
- `SEOScript.tsx`: Structured data injection

### 5. **Custom Hooks**

#### **useScrollToTop**

```typescript
const { isVisible, scrollToTop, scrollPosition } = useScrollToTop({
	threshold: 300,
	smooth: true,
});
```

#### **useIsClient**

```typescript
const isClient = useIsClient(); // Prevents hydration mismatches
```

#### **useLocalStorage**

```typescript
const [value, setValue, removeValue] = useLocalStorage("key", defaultValue);
```

### 6. **Utility Functions**

#### **Validation Utils**

- Email/phone validation
- Form field validation
- Contact form validation
- Input sanitization

#### **General Utils**

- Class name concatenation (`cn`)
- Debounce and throttle functions
- Currency and number formatting
- String manipulation (slugify, truncate, capitalize)
- URL manipulation
- Clipboard operations

### 7. **Type Safety**

#### **Common Types**

- `PageProps`: Next.js page component props
- `SEOProps`: SEO metadata properties
- `ContactInfo`: Contact form data structure
- `BlogPost`, `Service`, `Product`: Content types
- Schema.org types for structured data

#### **Utility Types**

- `Optional<T, K>`: Make specific properties optional
- `RequiredField<T, K>`: Make specific properties required
- `Nullable<T>`: Allow null values
- `DeepPartial<T>`: Recursive partial type

### 8. **Performance Optimizations**

#### **Next.js Configuration**

- Package import optimization for Material-UI
- Image optimization with WebP/AVIF formats
- Security headers
- CSS optimization
- Console removal in production

#### **Component Optimizations**

- Client-side rendering for interactive components
- Hydration-safe implementations
- Lazy loading and code splitting
- Optimized image loading

### 9. **SEO Excellence**

#### **Structured Data**

- Organization schema
- Breadcrumb navigation
- FAQ schemas
- Service and product schemas

#### **Metadata Generation**

- Dynamic page metadata
- Open Graph optimization
- Twitter Card support
- Canonical URLs

### 10. **Development Best Practices**

#### **Code Quality**

- TypeScript strict mode enabled
- ESLint configuration
- Consistent file naming
- Force consistent casing in file names

#### **Error Handling**

- Graceful fallbacks for client-side features
- Input validation and sanitization
- Type-safe error boundaries

#### **Accessibility**

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

## 🚀 Usage Examples

### Creating a New Page

```typescript
// src/app/new-page/page.tsx
import { Container, Typography } from "@mui/material";
import { generatePageMetadata } from "@/lib/seo";
import SEOScript from "@/components/SEOScript";

export const metadata = generatePageMetadata({
	title: "New Page",
	description: "Description of the new page",
	path: "/new-page",
});

export default function NewPage() {
	return (
		<>
			<SEOScript schema={/* your schema */} />
			<Container>
				<Typography variant="h1">New Page</Typography>
			</Container>
		</>
	);
}
```

### Creating a Custom Hook

```typescript
// src/hooks/useCustomHook.ts
"use client";

import { useState, useEffect } from "react";

export function useCustomHook() {
	const [state, setState] = useState(null);

	useEffect(() => {
		// Hook logic
	}, []);

	return { state, setState };
}
```

### Adding Utility Functions

```typescript
// src/utils/customUtils.ts
export function customFunction(input: string): string {
	// Utility logic
	return processedInput;
}

// Export from src/utils/index.ts
export { customFunction } from "./customUtils";
```

This architecture provides a scalable, maintainable, and performant foundation for the Florian Technologies website while following Next.js and React best practices.
