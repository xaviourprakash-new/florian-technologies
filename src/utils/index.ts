/**
 * General utility functions
 */

export function cn(
	...classes: (string | undefined | null | boolean)[]
): string {
	return classes.filter(Boolean).join(" ");
}

export function debounce<T extends (...args: unknown[]) => void>(
	func: T,
	delay: number,
): (...args: Parameters<T>) => void {
	let timeoutId: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), delay);
	};
}

export function throttle<T extends (...args: unknown[]) => void>(
	func: T,
	limit: number,
): (...args: Parameters<T>) => void {
	let inThrottle = false;
	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

export function formatCurrency(
	amount: number,
	currency: string = "USD",
	locale: string = "en-US",
): string {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
	}).format(amount);
}

export function formatNumber(
	num: number,
	locale: string = "en-US",
	options?: Intl.NumberFormatOptions,
): string {
	return new Intl.NumberFormat(locale, options).format(num);
}

export function generateId(prefix?: string): string {
	const timestamp = Date.now().toString(36);
	const random = Math.random().toString(36).substring(2);
	return prefix ? `${prefix}-${timestamp}-${random}` : `${timestamp}-${random}`;
}

export function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

export function capitalize(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function truncate(
	text: string,
	length: number,
	suffix: string = "...",
): string {
	if (text.length <= length) return text;
	return text.substring(0, length).trim() + suffix;
}

export function isExternalUrl(url: string): boolean {
	try {
		const urlObj = new URL(url);
		return urlObj.hostname !== window.location.hostname;
	} catch {
		return false;
	}
}

export function copyToClipboard(text: string): Promise<boolean> {
	if (navigator.clipboard && window.isSecureContext) {
		return navigator.clipboard
			.writeText(text)
			.then(() => true)
			.catch(() => false);
	} else {
		// Fallback for older browsers
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed";
		textArea.style.opacity = "0";
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		try {
			const successful = document.execCommand("copy");
			document.body.removeChild(textArea);
			return Promise.resolve(successful);
		} catch {
			document.body.removeChild(textArea);
			return Promise.resolve(false);
		}
	}
}

export function scrollToElement(
	elementId: string,
	options?: {
		behavior?: ScrollBehavior;
		block?: ScrollLogicalPosition;
		inline?: ScrollLogicalPosition;
		offset?: number;
	},
): void {
	const element = document.getElementById(elementId);
	if (!element) return;

	const {
		behavior = "smooth",
		block = "start",
		inline = "nearest",
		offset = 0,
	} = options || {};

	if (offset !== 0) {
		const elementPosition =
			element.getBoundingClientRect().top + window.pageYOffset;
		const offsetPosition = elementPosition + offset;

		window.scrollTo({
			top: offsetPosition,
			behavior,
		});
	} else {
		element.scrollIntoView({ behavior, block, inline });
	}
}

export function getQueryParam(param: string): string | null {
	if (typeof window === "undefined") return null;
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

export function setQueryParam(param: string, value: string): void {
	if (typeof window === "undefined") return;
	const url = new URL(window.location.href);
	url.searchParams.set(param, value);
	window.history.pushState({}, "", url);
}

export function removeQueryParam(param: string): void {
	if (typeof window === "undefined") return;
	const url = new URL(window.location.href);
	url.searchParams.delete(param);
	window.history.pushState({}, "", url);
}

export function wait(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
