"use client";

import { useEffect, useState, useCallback } from "react";

interface UseScrollToTopOptions {
	threshold?: number;
	smooth?: boolean;
}

interface UseScrollToTopReturn {
	isVisible: boolean;
	scrollToTop: () => void;
	scrollPosition: number;
}

export function useScrollToTop(
	options: UseScrollToTopOptions = {},
): UseScrollToTopReturn {
	const { threshold = 300, smooth = true } = options;
	const [isVisible, setIsVisible] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrollPosition(currentScrollY);
			setIsVisible(currentScrollY > threshold);
		};

		// Initial check
		handleScroll();

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [threshold]);

	const scrollToTop = useCallback(() => {
		if (smooth) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} else {
			window.scrollTo(0, 0);
		}
	}, [smooth]);

	return {
		isVisible,
		scrollToTop,
		scrollPosition,
	};
}
