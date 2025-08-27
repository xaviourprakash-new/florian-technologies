// Utility functions for consistent date formatting across SSR and client
export function formatDate(
	dateString: string,
	options?: {
		includeYear?: boolean;
		format?: "long" | "short" | "medium";
	},
): string {
	const { includeYear = true, format = "long" } = options || {};

	// Parse the date string consistently
	const date = new Date(dateString + "T00:00:00.000Z"); // Ensure UTC to avoid timezone issues

	// Use consistent formatting options
	const formatOptions: Intl.DateTimeFormatOptions = {
		timeZone: "UTC", // Force UTC to ensure consistency
		...(format === "long" && {
			year: includeYear ? "numeric" : undefined,
			month: "long",
			day: "numeric",
		}),
		...(format === "medium" && {
			year: includeYear ? "numeric" : undefined,
			month: "short",
			day: "numeric",
		}),
		...(format === "short" && {
			year: includeYear ? "2-digit" : undefined,
			month: "short",
			day: "numeric",
		}),
	};

	return date.toLocaleDateString("en-US", formatOptions);
}

// For static dates that won't change, pre-format them
export const STATIC_DATES = {
	"2024-01-15": "January 15, 2024",
	"2024-01-10": "January 10, 2024",
	"2024-01-05": "January 5, 2024",
	"2023-12-28": "December 28, 2023",
	"2023-12-20": "December 20, 2023",
	"2023-12-15": "December 15, 2023",
	"2023-12-10": "December 10, 2023",
} as const;

export function getStaticDate(dateString: string): string {
	return STATIC_DATES[dateString as keyof typeof STATIC_DATES] || dateString;
}
