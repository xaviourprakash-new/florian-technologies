"use client";

import { Box, Container, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
	// Initialize with current year to avoid hydration mismatches
	const [currentYear, setCurrentYear] = useState(2025);

	useEffect(() => {
		// Update year on client side after hydration
		setCurrentYear(new Date().getFullYear());
	}, []);

	return (
		<Box
			component="footer"
			sx={{
				py: { xs: 6, md: 4 },
				px: 2,
				pb: { xs: "calc(2rem + env(safe-area-inset-bottom))", md: 4 },
				mt: "auto",
				backgroundColor: "#2E7D32",
				color: "#FFFFFF",
				position: "relative",
				zIndex: 20,
				minHeight: { xs: "200px", md: "auto" },
				width: "100%",
				borderTop: "1px solid rgba(255, 255, 255, 0.1)",
				flexShrink: 0,
			}}>
			<Container
				maxWidth="lg"
				sx={{ position: "relative", zIndex: 1, height: "100%" }}>
				{/* Desktop Footer Layout */}
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						flexDirection: "row",
						alignItems: "center",
						gap: 2,
						textAlign: "center",
						minHeight: "80px",
						justifyContent: "space-between",
					}}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							width: "auto",
						}}>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 500,
								color: "#FFFFFF",
								fontStyle: "italic",
								maxWidth: "530px",
								lineHeight: 1.4,
								fontSize: "1.25rem",
							}}>
							&ldquo;Innovation is the bridge between medical excellence and
							technological advancement&rdquo;
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box
						sx={{
							display: "flex",
							gap: 3,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<MuiLink
							component={Link}
							href="/privacy"
							sx={{
								"color": "#FFFFFF",
								"textDecoration": "none",
								"fontSize": "1rem",
								"fontWeight": 400,
								"padding": "8px 16px",
								"borderRadius": "10px",
								"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								"position": "relative",
								"border": "1px solid rgba(255, 255, 255, 0.1)",
								"backdropFilter": "blur(8px)",
								"background":
									"linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
								"&:hover": {
									textDecoration: "none",
									background:
										"linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)",
									transform: "translateY(-2px) scale(1.02)",
									borderColor: "rgba(255, 255, 255, 0.2)",
									boxShadow:
										"0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
								},
							}}>
							Privacy Policy
						</MuiLink>
						<MuiLink
							component={Link}
							href="/terms"
							sx={{
								"color": "#FFFFFF",
								"textDecoration": "none",
								"fontSize": "1rem",
								"fontWeight": 400,
								"padding": "8px 16px",
								"borderRadius": "10px",
								"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								"position": "relative",
								"border": "1px solid rgba(255, 255, 255, 0.1)",
								"backdropFilter": "blur(8px)",
								"background":
									"linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
								"&:hover": {
									textDecoration: "none",
									background:
										"linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)",
									transform: "translateY(-2px) scale(1.02)",
									borderColor: "rgba(255, 255, 255, 0.2)",
									boxShadow:
										"0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
								},
							}}>
							Terms of Service
						</MuiLink>
						<MuiLink
							component={Link}
							href="/contact"
							sx={{
								"color": "#FFFFFF",
								"textDecoration": "none",
								"fontSize": "1rem",
								"fontWeight": 400,
								"padding": "8px 16px",
								"borderRadius": "10px",
								"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								"position": "relative",
								"border": "1px solid rgba(255, 255, 255, 0.1)",
								"backdropFilter": "blur(8px)",
								"background":
									"linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
								"&:hover": {
									textDecoration: "none",
									background:
										"linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)",
									transform: "translateY(-2px) scale(1.02)",
									borderColor: "rgba(255, 255, 255, 0.2)",
									boxShadow:
										"0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
								},
							}}>
							Contact Us
						</MuiLink>
					</Box>
				</Box>

				{/* Mobile Footer Layout */}
				<Box
					sx={{
						display: { xs: "flex", md: "none" },
						flexDirection: "column",
						alignItems: "center",
						gap: 4,
						textAlign: "center",
						minHeight: "120px",
					}}>
					{/* Mobile Quote */}
					<Box sx={{ width: "100%" }}>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 500,
								color: "#FFFFFF",
								fontStyle: "italic",
								lineHeight: 1.4,
								fontSize: "1rem",
								textAlign: "center",
								px: 1,
							}}>
							&ldquo;Innovation is the bridge between medical excellence and
							technological advancement&rdquo;
						</Typography>
					</Box>

					{/* Mobile Navigation Links */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
							width: "100%",
							alignItems: "center",
						}}>
						<MuiLink
							component={Link}
							href="/privacy"
							sx={{
								"color": "#FFFFFF",
								"textDecoration": "none",
								"fontSize": "0.95rem",
								"fontWeight": 400,
								"padding": "12px 20px",
								"borderRadius": "12px",
								"transition": "all 0.3s ease",
								"border": "1px solid rgba(255, 255, 255, 0.15)",
								"background":
									"linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
								"width": "80%",
								"maxWidth": "280px",
								"textAlign": "center",
								"&:hover": {
									textDecoration: "none",
									background:
										"linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
									transform: "translateY(-1px)",
									borderColor: "rgba(255, 255, 255, 0.25)",
								},
							}}>
							Privacy Policy
						</MuiLink>
						<MuiLink
							component={Link}
							href="/terms"
							sx={{
								"color": "#FFFFFF",
								"textDecoration": "none",
								"fontSize": "0.95rem",
								"fontWeight": 400,
								"padding": "12px 20px",
								"borderRadius": "12px",
								"transition": "all 0.3s ease",
								"border": "1px solid rgba(255, 255, 255, 0.15)",
								"background":
									"linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
								"width": "80%",
								"maxWidth": "280px",
								"textAlign": "center",
								"&:hover": {
									textDecoration: "none",
									background:
										"linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
									transform: "translateY(-1px)",
									borderColor: "rgba(255, 255, 255, 0.25)",
								},
							}}>
							Terms of Service
						</MuiLink>
						<MuiLink
							component={Link}
							href="/contact"
							sx={{
								"color": "#FFFFFF",
								"textDecoration": "none",
								"fontSize": "0.95rem",
								"fontWeight": 400,
								"padding": "12px 20px",
								"borderRadius": "12px",
								"transition": "all 0.3s ease",
								"border": "1px solid rgba(255, 255, 255, 0.15)",
								"background":
									"linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
								"width": "80%",
								"maxWidth": "280px",
								"textAlign": "center",
								"&:hover": {
									textDecoration: "none",
									background:
										"linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
									transform: "translateY(-1px)",
									borderColor: "rgba(255, 255, 255, 0.25)",
								},
							}}>
							Contact Us
						</MuiLink>
					</Box>
				</Box>

				{/* Copyright Section - Shared for both Desktop and Mobile */}
				<Box
					sx={{
						mt: { xs: 3, md: 3 },
						pt: { xs: 3, md: 2 },
						borderTop: "1px solid rgba(255, 255, 255, 0.1)",
						textAlign: "center",
					}}>
					<Typography
						variant="body2"
						sx={{
							color: "rgba(255, 255, 255, 0.8)",
							fontSize: { xs: "0.8rem", md: "0.875rem" },
							fontWeight: 300,
						}}>
						© {currentYear} Florian Technologies. Healthcare Technology
						Solutions with Excellence.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
