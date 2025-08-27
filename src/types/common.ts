// Common type definitions used across the application

export interface PageProps {
	params: { [key: string]: string };
	searchParams: { [key: string]: string | string[] | undefined };
}

export interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	url?: string;
}

export interface PageMetadata {
	title: string;
	description: string;
	keywords: string[];
	openGraph?: {
		title: string;
		description: string;
		image?: string;
		url?: string;
	};
}

export interface NavItem {
	label: string;
	href: string;
	target?: "_blank" | "_self";
}

export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	content: string;
	author: string;
	publishedDate: string;
	category: string;
	tags: string[];
	image?: string;
	slug: string;
}

export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
	features: string[];
	pricing?: {
		basic: number;
		premium: number;
		enterprise: number;
	};
}

export interface Product {
	id: string;
	name: string;
	description: string;
	category: string;
	features: string[];
	specifications?: Record<string, string>;
	image?: string;
	price?: number;
}

export interface ContactInfo {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

// Form types
export interface FormState {
	isLoading: boolean;
	isSubmitted: boolean;
	errors: Record<string, string>;
	values: Record<string, string | number | boolean>;
}

export interface ValidationRule {
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	pattern?: RegExp;
	custom?: (value: string | number | boolean) => string | null;
}

export interface FormField {
	name: string;
	type:
		| "text"
		| "email"
		| "password"
		| "textarea"
		| "select"
		| "checkbox"
		| "radio";
	label: string;
	placeholder?: string;
	required?: boolean;
	validation?: ValidationRule;
	options?: Array<{ label: string; value: string }>;
}

export interface CompanyInfo {
	name: string;
	description: string;
	address: {
		street: string;
		city: string;
		state: string;
		zipCode: string;
		country: string;
	};
	contact: {
		phone: string;
		email: string;
		website: string;
	};
	socialMedia: {
		linkedin?: string;
		twitter?: string;
		facebook?: string;
		instagram?: string;
	};
}

// Schema.org structured data types
export interface OrganizationSchema {
	"@context": "https://schema.org";
	"@type": "Organization";
	"name": string;
	"description": string;
	"url": string;
	"logo": string;
	"address": {
		"@type": "PostalAddress";
		"streetAddress": string;
		"addressLocality": string;
		"addressRegion": string;
		"postalCode": string;
		"addressCountry": string;
	};
	"contactPoint": {
		"@type": "ContactPoint";
		"telephone": string;
		"contactType": string;
		"email": string;
	};
}

export interface BreadcrumbSchema {
	"@context": "https://schema.org";
	"@type": "BreadcrumbList";
	"itemListElement": Array<{
		"@type": "ListItem";
		"position": number;
		"name": string;
		"item": string;
	}>;
}

export interface FAQSchema {
	"@context": "https://schema.org";
	"@type": "FAQPage";
	"mainEntity": Array<{
		"@type": "Question";
		"name": string;
		"acceptedAnswer": {
			"@type": "Answer";
			"text": string;
		};
	}>;
}

// Component prop types
export interface BaseComponentProps {
	"className"?: string;
	"id"?: string;
	"data-testid"?: string;
}

export interface LayoutProps extends BaseComponentProps {
	children: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
	href?: string;
	target?: "_blank" | "_self";
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Loading states
export type LoadingState = "idle" | "loading" | "success" | "error";

// Generic data fetching types
export interface UseAsyncState<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
}
