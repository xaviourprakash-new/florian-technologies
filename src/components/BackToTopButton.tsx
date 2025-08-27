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
					"background": "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
					"color": "#FFFFFF",
					"zIndex": 1000,
					"boxShadow": "0 8px 32px rgba(46, 125, 50, 0.3)",
					"border": "none",
					"backdropFilter": "blur(10px)",
					"&:hover": {
						background: "linear-gradient(135deg, #1B5E20 0%, #0D4E12 100%)",
						transform: "scale(1.15) translateY(-2px)",
						boxShadow: "0 12px 40px rgba(46, 125, 50, 0.5)",
					},
					"&:active": {
						transform: "scale(1.05)",
					},
					"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					"animation": "float 4s ease-in-out infinite",
					"@keyframes float": {
						"0%, 100%": {
							transform: "translateY(0px)",
						},
						"50%": {
							transform: "translateY(-4px)",
						},
					},
				}}
				size="medium"
				aria-label="scroll back to top">
				<KeyboardArrowUpIcon sx={{ fontSize: "1.5rem" }} />
			</Fab>
		</Zoom>
	);
};

export default BackToTopButton;
