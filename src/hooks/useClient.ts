"use client";

import { useEffect, useState } from "react";

/**
 * Hook to prevent hydration mismatches by tracking if component is mounted
 * Useful for client-only features like scroll position, local storage, etc.
 */
export function useIsClient(): boolean {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return isClient;
}

/**
 * Hook for safe access to localStorage with SSR compatibility
 */
export function useLocalStorage<T>(
	key: string,
	initialValue: T,
): [T, (value: T | ((val: T) => T)) => void, () => void] {
	const [storedValue, setStoredValue] = useState<T>(initialValue);
	const isClient = useIsClient();

	useEffect(() => {
		if (!isClient) return;

		try {
			const item = window.localStorage.getItem(key);
			if (item) {
				setStoredValue(JSON.parse(item));
			}
		} catch (error) {
			console.warn(`Error reading localStorage key "${key}":`, error);
		}
	}, [key, isClient]);

	const setValue = (value: T | ((val: T) => T)) => {
		if (!isClient) return;

		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.warn(`Error setting localStorage key "${key}":`, error);
		}
	};

	const removeValue = () => {
		if (!isClient) return;

		try {
			window.localStorage.removeItem(key);
			setStoredValue(initialValue);
		} catch (error) {
			console.warn(`Error removing localStorage key "${key}":`, error);
		}
	};

	return [storedValue, setValue, removeValue];
}

/**
 * Hook for tracking window dimensions with SSR safety
 */
export function useWindowSize(): { width: number; height: number } {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});
	const isClient = useIsClient();

	useEffect(() => {
		if (!isClient) return;

		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Set initial size
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isClient]);

	return windowSize;
}

/**
 * Hook for detecting if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
	const isClient = useIsClient();

	useEffect(() => {
		if (!isClient) return;

		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setPrefersReducedMotion(mediaQuery.matches);

		const handleChange = (event: MediaQueryListEvent) => {
			setPrefersReducedMotion(event.matches);
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [isClient]);

	return prefersReducedMotion;
}
