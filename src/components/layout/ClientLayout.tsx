"use client";

import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Image from "next/image";
import theme from "@/lib/theme";
import Header from "./Header";
import Footer from "./Footer";
import BackToTopButton from "@/components/BackToTopButton";

interface ClientLayoutProps {
	children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box
					sx={{
						"display": "flex",
						"flexDirection": "column",
						"minHeight": "100vh", // Use standard viewport height to avoid hydration issues
						"@supports (height: 100dvh)": {
							minHeight: "100dvh", // Progressive enhancement for modern browsers
						},
						"position": "relative",
						"width": "100%",
						"overflowX": "hidden",
					}}>
					{/* Background Image */}
					<Image
						src="/images/body-background.jpg"
						alt="Background"
						fill
						style={{
							objectFit: "cover",
							objectPosition: "center top",
							zIndex: -2,
						}}
						quality={75}
						priority={false}
					/>
					{/* Overlay */}
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(255, 255, 255, 0.92)",
							zIndex: -1,
						}}
					/>
					<Header />
					<Box
						component="main"
						sx={{
							flexGrow: 1,
							position: "relative",
							zIndex: 1,
							pb: { xs: 0, md: 0 }, // Remove extra padding that might affect footer
							minHeight: {
								xs: "calc(100vh - 300px)",
								md: "calc(100vh - 200px)",
							}, // Better minimum height calculation
						}}>
						{children}
					</Box>
					<Footer />
					<BackToTopButton />
				</Box>
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
