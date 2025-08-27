"use client";

import React from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useScrollToTop, useIsClient } from "@/hooks";

const BackToTopButton: React.FC = () => {
	const { isVisible, scrollToTop } = useScrollToTop({ threshold: 300 });
	const isClient = useIsClient();

	// Don't render on server to prevent hydration mismatch
	if (!isClient) return null;

	return (
		<Zoom in={isVisible}>
			<Fab
				onClick={scrollToTop}
				sx={{
					"position": "fixed",
					"bottom": { xs: 220, md: 250 }, // Positioned well above footer
					"right": { xs: 16, md: 32 },
					"backgroundColor": "#FFFFFF", // White background as requested
					"color": "#2E7D32", // Green arrow to match website theme
					"zIndex": 1000,
					"boxShadow": "0 4px 20px rgba(46, 125, 50, 0.3)",
					"border": "2px solid #2E7D32", // Green border to match theme
					"&:hover": {
						backgroundColor: "#F8F9FA", // Very light background on hover
						color: "#1B5E20", // Darker green on hover
						transform: "scale(1.1)",
						boxShadow: "0 6px 25px rgba(46, 125, 50, 0.4)",
						borderColor: "#1B5E20",
					},
					"transition": "all 0.3s ease",
				}}
				size="medium"
				aria-label="scroll back to top">
				<KeyboardArrowUpIcon />
			</Fab>
		</Zoom>
	);
};

export default BackToTopButton;
