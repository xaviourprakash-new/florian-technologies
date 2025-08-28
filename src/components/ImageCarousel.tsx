"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { keyframes } from "@mui/system";
import Image from "next/image";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

// Define keyframe animations
const slideIn3D = keyframes`
  0% {
    opacity: 0;
    transform: perspective(1000px) rotateY(30deg) translateX(100px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) rotateY(0deg) translateX(0) scale(1);
  }
`;

const flip3D = keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  50% {
    transform: perspective(1000px) rotateY(90deg) scale(0.8);
  }
  100% {
    transform: perspective(1000px) rotateY(0deg);
  }
`;

const imageZoom = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.05) rotate(0.5deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 20px rgba(46, 125, 50, 0);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

interface CarouselItem {
	image: string;
	title: string;
	description: string;
	category: string;
}

const carouselItems: CarouselItem[] = [
	{
		image: "/images/medical_innovations.png",
		title: "Medical Innovation Excellence",
		description:
			"Cutting-edge medical devices and solutions designed for modern healthcare facilities",
		category: "Healthcare Technology",
	},
	{
		image: "/images/it_services.png",
		title: "Expert IT Services",
		description:
			"Comprehensive technology solutions spanning cloud infrastructure and digital transformation",
		category: "Technology Solutions",
	},
	{
		image: "/images/healthcare_products.png",
		title: "Healthcare Products",
		description:
			"Advanced medical products for hospitals, clinics, and pharmaceutical environments",
		category: "Medical Equipment",
	},
	{
		image: "/images/software_development_team.png",
		title: "Software Development",
		description:
			"Custom software solutions with modern frameworks and scalable architectures",
		category: "Development Services",
	},
	{
		image: "/images/domain_expertise.png",
		title: "Domain Expertise",
		description:
			"Cross-industry consulting with deep technical knowledge and business insight",
		category: "Consulting",
	},
	{
		image: "/images/client_first_approach.png",
		title: "Client-Centric Approach",
		description:
			"Customer-focused solutions with proven track record of excellence and innovation",
		category: "Service Excellence",
	},
];

const ImageCarousel: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [transitionDirection, setTransitionDirection] = useState<
		"next" | "prev"
	>("next");

	const nextSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setTransitionDirection("next");

		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1,
			);
			setTimeout(() => {
				setIsTransitioning(false);
			}, 300);
		}, 300);
	}, [isTransitioning]);

	const prevSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setTransitionDirection("prev");

		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1,
			);
			setTimeout(() => {
				setIsTransitioning(false);
			}, 300);
		}, 300);
	}, [isTransitioning]);

	const goToSlide = (index: number) => {
		if (isTransitioning || index === currentIndex) return;
		setIsTransitioning(true);
		setTransitionDirection(index > currentIndex ? "next" : "prev");

		setTimeout(() => {
			setCurrentIndex(index);
			setTimeout(() => {
				setIsTransitioning(false);
			}, 300);
		}, 300);
	};

	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, nextSlide]);

	const currentItem = carouselItems[currentIndex];

	return (
		<Box
			sx={{
				"position": "relative",
				"width": "100%",
				"height": { xs: "500px", md: "600px" },
				"borderRadius": "24px",
				"overflow": "hidden",
				"background": "linear-gradient(135deg, #f8fffe 0%, #ffffff 100%)",
				"boxShadow": "0 20px 60px rgba(46, 125, 50, 0.15)",
				"border": "1px solid rgba(46, 125, 50, 0.1)",
				"&:hover": {
					boxShadow: "0 30px 80px rgba(46, 125, 50, 0.25)",
					transform: "translateY(-5px)",
				},
				"transition": "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
			}}
			onMouseEnter={() => setIsAutoPlaying(false)}
			onMouseLeave={() => setIsAutoPlaying(true)}>
			{/* Background Image with 3D Animation and Better Scaling */}
			<Box
				sx={{
					"position": "absolute",
					"top": 0,
					"left": 0,
					"right": 0,
					"bottom": 0,
					"perspective": "1000px",
					"&::before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							"linear-gradient(135deg, rgba(46, 125, 50, 0.2) 0%, rgba(27, 94, 32, 0.3) 100%)",
						zIndex: 2,
					},
					"&::after": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: "2px",
						background:
							"linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
						animation: `${shimmer} 3s ease-in-out infinite`,
						zIndex: 3,
					},
				}}>
				<Box
					sx={{
						position: "relative",
						width: "100%",
						height: "100%",
						transformStyle: "preserve-3d",
						animation: isTransitioning
							? `${flip3D} 0.6s ease-in-out`
							: `${imageZoom} 20s ease-in-out infinite`,
					}}>
					<Image
						src={currentItem.image}
						alt={currentItem.title}
						fill
						style={{
							objectFit: "cover",
							objectPosition: "center center",
							transform: isTransitioning
								? transitionDirection === "next"
									? "perspective(1000px) rotateY(15deg) scale(0.9)"
									: "perspective(1000px) rotateY(-15deg) scale(0.9)"
								: "perspective(1000px) rotateY(0deg) scale(1)",
							transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
						}}
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
					/>
				</Box>
			</Box>

			{/* Content Overlay with 3D Animation */}
			<Box
				sx={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					p: { xs: 4, md: 6 },
					background:
						"linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.6) 100%)",
					zIndex: 4,
					transform: isTransitioning
						? transitionDirection === "next"
							? "perspective(1000px) rotateX(10deg) translateY(30px)"
							: "perspective(1000px) rotateX(-10deg) translateY(30px)"
						: "perspective(1000px) rotateX(0deg) translateY(0px)",
					opacity: isTransitioning ? 0.7 : 1,
					transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				}}>
				<Box
					sx={{
						transform: isTransitioning ? "scale(0.95)" : "scale(1)",
						transition: "transform 0.6s ease-out",
					}}>
					{/* Category Badge */}
					<Box
						sx={{
							display: "inline-block",
							backgroundColor: "rgba(255, 255, 255, 0.95)",
							color: "#2E7D32",
							px: 3,
							py: 1,
							borderRadius: "20px",
							fontSize: "0.85rem",
							fontWeight: 600,
							mb: 3,
							backdropFilter: "blur(10px)",
							border: "1px solid rgba(46, 125, 50, 0.3)",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
							animation: isTransitioning
								? "none"
								: `${slideIn3D} 0.8s ease-out 0.3s both`,
							transform: isTransitioning
								? "perspective(500px) rotateY(45deg) scale(0.8)"
								: "perspective(500px) rotateY(0deg) scale(1)",
							transition: "transform 0.4s ease-out",
						}}>
						{currentItem.category}
					</Box>

					{/* Title */}
					<Typography
						variant="h2"
						component="h2"
						sx={{
							color: "white",
							fontSize: { xs: "2rem", md: "2.8rem" },
							fontWeight: 700,
							lineHeight: 1.2,
							mb: 2,
							fontFamily: "Poppins, sans-serif",
							textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
							animation: isTransitioning
								? "none"
								: `${slideIn3D} 0.8s ease-out 0.5s both`,
							transform: isTransitioning
								? "perspective(800px) rotateX(30deg) translateY(20px) scale(0.9)"
								: "perspective(800px) rotateX(0deg) translateY(0px) scale(1)",
							transition: "transform 0.5s ease-out",
						}}>
						{currentItem.title}
					</Typography>

					{/* Description */}
					<Typography
						variant="body1"
						sx={{
							color: "rgba(255, 255, 255, 0.95)",
							fontSize: { xs: "1rem", md: "1.2rem" },
							lineHeight: 1.6,
							maxWidth: "600px",
							textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
							animation: isTransitioning
								? "none"
								: `${slideIn3D} 0.8s ease-out 0.7s both`,
							transform: isTransitioning
								? "perspective(600px) rotateX(20deg) translateY(15px) scale(0.95)"
								: "perspective(600px) rotateX(0deg) translateY(0px) scale(1)",
							transition: "transform 0.6s ease-out",
						}}>
						{currentItem.description}
					</Typography>
				</Box>
			</Box>

			{/* Enhanced 3D Navigation Arrows */}
			<IconButton
				onClick={prevSlide}
				disabled={isTransitioning}
				sx={{
					"position": "absolute",
					"left": { xs: 16, md: 24 },
					"top": "50%",
					"transform": "translateY(-50%)",
					"backgroundColor": "rgba(255, 255, 255, 0.9)",
					"color": "#2E7D32",
					"backdropFilter": "blur(10px)",
					"border": "1px solid rgba(46, 125, 50, 0.2)",
					"boxShadow": "0 4px 20px rgba(0, 0, 0, 0.1)",
					"zIndex": 5,
					"&:hover": {
						backgroundColor: "rgba(46, 125, 50, 0.9)",
						color: "white",
						transform:
							"translateY(-50%) scale(1.1) perspective(500px) rotateY(-15deg)",
						boxShadow: "0 6px 25px rgba(46, 125, 50, 0.3)",
					},
					"&:disabled": {
						opacity: 0.5,
						transform: "translateY(-50%) scale(0.9)",
					},
					"transition": "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					"animation": `${float} 4s ease-in-out infinite`,
				}}>
				<ArrowBackIosNew />
			</IconButton>

			<IconButton
				onClick={nextSlide}
				disabled={isTransitioning}
				sx={{
					"position": "absolute",
					"right": { xs: 16, md: 24 },
					"top": "50%",
					"transform": "translateY(-50%)",
					"backgroundColor": "rgba(255, 255, 255, 0.9)",
					"color": "#2E7D32",
					"backdropFilter": "blur(10px)",
					"border": "1px solid rgba(46, 125, 50, 0.2)",
					"boxShadow": "0 4px 20px rgba(0, 0, 0, 0.1)",
					"zIndex": 5,
					"&:hover": {
						backgroundColor: "rgba(46, 125, 50, 0.9)",
						color: "white",
						transform:
							"translateY(-50%) scale(1.1) perspective(500px) rotateY(15deg)",
						boxShadow: "0 6px 25px rgba(46, 125, 50, 0.3)",
					},
					"&:disabled": {
						opacity: 0.5,
						transform: "translateY(-50%) scale(0.9)",
					},
					"transition": "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					"animation": `${float} 4s ease-in-out infinite 2s`,
				}}>
				<ArrowForwardIos />
			</IconButton>

			{/* Enhanced 3D Dots Indicator */}
			<Box
				sx={{
					position: "absolute",
					bottom: 24,
					left: "50%",
					transform: isTransitioning
						? "translateX(-50%) perspective(500px) rotateX(30deg) scale(0.9)"
						: "translateX(-50%) perspective(500px) rotateX(0deg) scale(1)",
					display: "flex",
					gap: 2,
					zIndex: 5,
					backgroundColor: "rgba(0, 0, 0, 0.3)",
					borderRadius: "20px",
					p: 1.5,
					backdropFilter: "blur(10px)",
					transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				}}>
				{carouselItems.map((_, index) => (
					<Box
						key={index}
						onClick={() => goToSlide(index)}
						sx={{
							"width": index === currentIndex ? 40 : 12,
							"height": 12,
							"borderRadius": 6,
							"backgroundColor":
								index === currentIndex
									? "rgba(255, 255, 255, 0.95)"
									: "rgba(255, 255, 255, 0.5)",
							"cursor": "pointer",
							"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							"border": "1px solid rgba(255, 255, 255, 0.3)",
							"boxShadow":
								index === currentIndex
									? "0 2px 10px rgba(255, 255, 255, 0.3)"
									: "none",
							"&:hover": {
								backgroundColor: "rgba(255, 255, 255, 0.8)",
								transform: "scale(1.2) perspective(300px) rotateZ(5deg)",
								boxShadow: "0 4px 15px rgba(255, 255, 255, 0.4)",
							},
							"&:active": {
								transform: "scale(0.9) perspective(300px) rotateZ(-5deg)",
							},
							...(index === currentIndex && {
								animation: `${pulse} 2s ease-in-out infinite`,
							}),
						}}
					/>
				))}
			</Box>

			{/* Progress Bar */}
			<Box
				sx={{
					"position": "absolute",
					"top": 0,
					"left": 0,
					"height": "4px",
					"backgroundColor": "rgba(46, 125, 50, 0.8)",
					"borderRadius": "0 0 4px 0",
					"zIndex": 5,
					"animation": isAutoPlaying
						? "progressBar 5s linear infinite"
						: "none",
					"@keyframes progressBar": {
						"0%": { width: "0%" },
						"100%": { width: "100%" },
					},
				}}
			/>
		</Box>
	);
};

export default ImageCarousel;
