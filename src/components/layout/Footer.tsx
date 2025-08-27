"use client";

import React from "react";
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: { xs: 6, md: 4 }, // Increased mobile padding significantly
				px: 2,
				pb: { xs: "calc(2rem + env(safe-area-inset-bottom))", md: 4 }, // Enhanced safe area padding
				mt: "auto",
				backgroundColor: "#2E7D32",
				color: "#FFFFFF",
				position: "relative",
				zIndex: 20, // Increased z-index even more
				minHeight: { xs: "200px", md: "auto" }, // Minimum height for mobile
				width: "100%",
				borderTop: "1px solid rgba(255, 255, 255, 0.1)",
				// Ensure footer stays at bottom and is fully visible
				flexShrink: 0,
			}}>
			<Container
				maxWidth="lg"
				sx={{ position: "relative", zIndex: 1, height: "100%" }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignItems: { xs: "stretch", md: "center" },
						gap: { xs: 5, md: 2 }, // Increased mobile gap
						textAlign: { xs: "left", md: "center" },
						minHeight: { xs: "120px", md: "80px" }, // Ensure minimum content height
						justifyContent: "space-between",
					}}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							width: { xs: "100%", md: "auto" },
							mb: { xs: 0, md: 0 },
						}}>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 500,
								color: "#FFFFFF",
								fontStyle: "italic",
								maxWidth: { xs: "100%", md: "530px" },
								lineHeight: 1.4,
								fontSize: { xs: "1rem", md: "1.25rem" },
							}}>
							&ldquo;Innovation is the bridge between medical excellence and
							technological advancement&rdquo;
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box
						sx={{
							display: "flex",
							gap: { xs: 3, md: 3 },
							flexWrap: "wrap",
							justifyContent: { xs: "flex-start", md: "center" },
							width: { xs: "100%", md: "auto" },
							alignItems: "center",
						}}>
						<MuiLink
							component={Link}
							href="/privacy"
							sx={{
								"color": "#FFFFFF",
								"textDecoration": "none",
								"fontSize": { xs: "0.95rem", md: "1rem" },
								"fontWeight": 400,
								"padding": { xs: "8px 0", md: "4px 8px" },
								"borderRadius": "6px",
								"transition": "all 0.3s ease",
								"position": "relative",
								"&:hover": {
									textDecoration: "none",
									backgroundColor: "rgba(255, 255, 255, 0.1)",
									transform: "translateY(-1px)",
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
								"fontSize": { xs: "0.95rem", md: "1rem" },
								"fontWeight": 400,
								"padding": { xs: "8px 0", md: "4px 8px" },
								"borderRadius": "6px",
								"transition": "all 0.3s ease",
								"position": "relative",
								"&:hover": {
									textDecoration: "none",
									backgroundColor: "rgba(255, 255, 255, 0.1)",
									transform: "translateY(-1px)",
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
								"fontSize": { xs: "0.95rem", md: "1rem" },
								"fontWeight": 400,
								"padding": { xs: "8px 0", md: "4px 8px" },
								"borderRadius": "6px",
								"transition": "all 0.3s ease",
								"position": "relative",
								"&:hover": {
									textDecoration: "none",
									backgroundColor: "rgba(255, 255, 255, 0.1)",
									transform: "translateY(-1px)",
								},
							}}>
							Contact Us
						</MuiLink>
					</Box>
				</Box>
				<Box
					sx={{
						borderTop: "1px solid rgba(255,255,255,0.2)",
						mt: { xs: 5, md: 3 }, // Increased mobile margin
						pt: { xs: 5, md: 3 }, // Increased mobile padding
						pb: { xs: 3, md: 0 }, // Additional bottom padding for mobile
						position: "relative",
						zIndex: 1,
						minHeight: { xs: "60px", md: "auto" }, // Ensure minimum height
					}}>
					<Typography
						variant="body2"
						align="center"
						sx={{
							color: "rgba(255,255,255,0.9)",
							fontSize: { xs: "0.9rem", md: "0.875rem" },
							lineHeight: 1.6,
						}}>
						© {new Date().getFullYear()} Florian Technologies. All rights
						reserved.
						<br />
						<Typography
							component="span"
							variant="caption"
							sx={{
								color: "rgba(255,255,255,0.7)",
								fontSize: { xs: "0.8rem", md: "0.75rem" },
								display: "block",
								mt: 1,
							}}>
							Innovative IT Solutions & Medical Products for Healthcare
							Excellence
						</Typography>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
