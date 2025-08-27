"use client";

import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system";

// Define keyframe animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 20px rgba(46, 125, 50, 0.3), 0 0 30px rgba(46, 125, 50, 0.2), 0 0 40px rgba(46, 125, 50, 0.1);
  }
  50% {
    text-shadow: 0 0 30px rgba(46, 125, 50, 0.5), 0 0 40px rgba(46, 125, 50, 0.3), 0 0 50px rgba(46, 125, 50, 0.2);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

interface AnimatedTitleProps {
	className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ className }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	const titleParts = [
		{ text: "Florian Technologies", highlight: true },
		{ text: " – ", highlight: false, thin: true },
		{ text: "Innovating Healthcare", highlight: true },
		{ text: " & ", highlight: false, thin: true },
		{ text: "Beyond", highlight: true },
	];

	return (
		<Box
			className={className}
			sx={{
				"position": "relative",
				"display": "inline-block",
				"overflow": "hidden",
				"&::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background:
						"linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
					transform: "translateX(-100%)",
					animation: isVisible ? `${shimmer} 3s ease-in-out infinite` : "none",
					animationDelay: "1s",
				},
			}}>
			<Typography
				variant="h1"
				component="h1"
				sx={{
					"fontSize": {
						xs: "1.8rem",
						sm: "2.2rem",
						md: "3.2rem",
						lg: "3.6rem",
					},
					"fontWeight": 600, // Reduced from 800 to 600
					"fontFamily": "Poppins, sans-serif",
					"lineHeight": 1.3, // Increased from 1.1 to 1.3 to give more space for descenders
					"letterSpacing": "0.5px", // Added letter spacing to prevent touching
					"mb": 5, // Increased from 3 to 5 for more vertical space
					"color": "#2C3E50", // Solid fallback color
					"animation": isVisible
						? `${fadeInUp} 1.2s ease-out, ${glow} 4s ease-in-out infinite, ${float} 6s ease-in-out infinite`
						: "none",
					"animationDelay": "0s, 2s, 3s",
					"textAlign": "center",
					"position": "relative",
					"cursor": "default",
					"userSelect": "none",
					"transition": "all 0.3s ease",
					"&:hover": {
						transform: "scale(1.02)",
						filter: "brightness(1.1)",
					},
					// Responsive font sizes with better scaling
					"@media (max-width: 480px)": {
						fontSize: "1.5rem",
					},
					"@media (min-width: 1200px)": {
						fontSize: "4.0rem",
					},
				}}>
				{titleParts.map((part, index) => (
					<Box
						key={index}
						component="span"
						sx={{
							"display": "inline-block",
							"opacity": isVisible ? 1 : 0,
							"transform": isVisible ? "translateY(0)" : "translateY(30px)",
							"transition": `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
							"transitionDelay": `${index * 0.15}s`,
							"position": "relative",
							"fontWeight": part.thin ? 200 : "inherit", // Make & and – symbols thin
							"fontSize": part.thin ? "0.6em" : "inherit", // Make & and – symbols smaller
							"paddingX": part.thin ? "0.5em" : 0, // Add horizontal padding to & and – symbols
							"cursor": part.highlight ? "pointer" : "default",
							"&:hover": part.highlight
								? {
										transform: "translateY(-2px) scale(1.02)",
										color: "#1B5E20",
										transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
										textShadow: "0 2px 8px rgba(46, 125, 50, 0.3)",
								  }
								: {},
							...(part.highlight && {
								"&::after": {
									content: '""',
									position: "absolute",
									bottom: "-2px",
									left: "50%",
									width: "0%",
									height: "3px",
									background: "linear-gradient(90deg, #2E7D32, #1B5E20)",
									transform: "translateX(-50%)",
									borderRadius: "2px",
									transition: "all 0.3s ease",
									animation: isVisible
										? `highlightExpand 1.5s ease-out ${
												index * 0.3 + 1.5
										  }s forwards`
										: "none",
								},
								"&:hover::after": {
									height: "4px",
									boxShadow: "0 2px 8px rgba(46, 125, 50, 0.4)",
								},
								"@keyframes highlightExpand": {
									to: {
										width: "100%",
									},
								},
							}),
						}}>
						{part.text}
					</Box>
				))}
			</Typography>

			{/* Decorative Elements */}
			<Box
				sx={{
					position: "absolute",
					top: "-20px",
					left: "-20px",
					width: "40px",
					height: "40px",
					borderRadius: "50%",
					background: "linear-gradient(135deg, #2E7D32, #1B5E20)",
					opacity: isVisible ? 0.1 : 0,
					animation: isVisible ? `${float} 8s ease-in-out infinite` : "none",
					animationDelay: "2s",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					right: "-30px",
					width: "20px",
					height: "20px",
					borderRadius: "50%",
					background: "linear-gradient(135deg, #2E7D32, #1B5E20)",
					opacity: isVisible ? 0.15 : 0,
					animation: isVisible ? `${float} 6s ease-in-out infinite` : "none",
					animationDelay: "3s",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					bottom: "-15px",
					left: "10%",
					width: "30px",
					height: "30px",
					borderRadius: "50%",
					background: "linear-gradient(135deg, #2E7D32, #1B5E20)",
					opacity: isVisible ? 0.08 : 0,
					animation: isVisible ? `${float} 10s ease-in-out infinite` : "none",
					animationDelay: "4s",
				}}
			/>
		</Box>
	);
};

export default AnimatedTitle;
