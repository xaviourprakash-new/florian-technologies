import { Metadata } from "next";
import { SEO_DATA, PAGE_SEO } from "../constants/seo";

interface SEOConfig {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
	const {
		title = SEO_DATA.title,
		description = SEO_DATA.description,
		keywords = SEO_DATA.keywords,
		image = SEO_DATA.openGraph.images[0].url,
		url = SEO_DATA.url,
		type = "website",
	} = config;

	return {
		title,
		description,
		keywords,
		authors: [{ name: "Florian Technologies" }],
		creator: "Florian Technologies",
		publisher: "Florian Technologies",
		robots: {
			index: true,
			follow: true,
			googleBot: {
				"index": true,
				"follow": true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		openGraph: {
			type: type as "website" | "article",
			locale: "en_US",
			url,
			title,
			description,
			siteName: SEO_DATA.openGraph.siteName,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
			creator: SEO_DATA.twitter.creator,
		},
		alternates: {
			canonical: url,
		},
	};
}

export function generatePageMetadata(pageKey: keyof typeof PAGE_SEO): Metadata {
	const pageData = PAGE_SEO[pageKey];
	return generateMetadata({
		title: pageData.title,
		description: pageData.description,
		keywords: pageData.keywords,
		url: `${SEO_DATA.url}${pageKey === "home" ? "" : `/${pageKey}`}`,
	});
}

// JSON-LD Schema generators
export function generateOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": SEO_DATA.organization.name,
		"description": SEO_DATA.organization.description,
		"url": SEO_DATA.organization.url,
		"logo": SEO_DATA.organization.logo,
		"address": {
			"@type": "PostalAddress",
			...SEO_DATA.organization.address,
		},
		"contactPoint": {
			"@type": "ContactPoint",
			...SEO_DATA.organization.contactPoint,
		},
		"sameAs": [
			"https://www.linkedin.com/company/floriantechnologies",
			"https://twitter.com/floriantech",
		],
	};
}

export function generateWebsiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": SEO_DATA.organization.name,
		"description": SEO_DATA.description,
		"url": SEO_DATA.url,
		"potentialAction": {
			"@type": "SearchAction",
			"target": `${SEO_DATA.url}/search?q={search_term_string}`,
			"query-input": "required name=search_term_string",
		},
	};
}

export function generateProductSchema(product: {
	name: string;
	description: string;
	image: string;
	category: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Product",
		"name": product.name,
		"description": product.description,
		"image": product.image,
		"category": product.category,
		"brand": {
			"@type": "Brand",
			"name": SEO_DATA.organization.name,
		},
		"manufacturer": {
			"@type": "Organization",
			"name": SEO_DATA.organization.name,
		},
	};
}

export function generateServiceSchema(service: {
	name: string;
	description: string;
	serviceType: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		"name": service.name,
		"description": service.description,
		"serviceType": service.serviceType,
		"provider": {
			"@type": "Organization",
			"name": SEO_DATA.organization.name,
			"url": SEO_DATA.organization.url,
		},
	};
}

export function generateBreadcrumbSchema(
	items: Array<{ name: string; url: string }>,
) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": items.map((item, index) => ({
			"@type": "ListItem",
			"position": index + 1,
			"name": item.name,
			"item": item.url,
		})),
	};
}

export function generateFAQSchema(
	faqs: Array<{ question: string; answer: string }>,
) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map((faq) => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer,
			},
		})),
	};
}
