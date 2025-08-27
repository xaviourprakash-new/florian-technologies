"use client";

import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	Box,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const menuItems = [
		{ text: "Home", href: "/" },
		{ text: "Services", href: "/services" },
		{ text: "Products", href: "/products" },
		{ text: "About Us", href: "/about" },
		{ text: "Blog", href: "/blog" },
		{ text: "Contact", href: "/contact" },
	];

	const menuButtonStyles = {
		"color": "#2C3E50",
		"fontSize": "0.95rem",
		"fontWeight": 500,
		"px": 2.5,
		"py": 1.2,
		"borderRadius": "8px",
		"position": "relative",
		"overflow": "hidden",
		"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
		"margin": "0 2px",
		"&::before": {
			content: '""',
			position: "absolute",
			bottom: 0,
			left: "-100%",
			width: "100%",
			height: "3px",
			backgroundColor: "#2E7D32",
			transition: "left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
			borderRadius: "2px 2px 0 0",
		},
		"&::after": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "#E8F5E8",
			opacity: 0,
			transition: "opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
			zIndex: -1,
		},
		"&:hover": {
			backgroundColor: "transparent",
			transform: "translateY(-2px)",
			boxShadow: "0 4px 12px rgba(46, 125, 50, 0.2)",
			color: "#1B5E20",
		},
		"&:hover::before": {
			left: 0,
		},
		"&:hover::after": {
			opacity: 1,
		},
	};
	return (
		<AppBar
			position="static"
			elevation={0}
			sx={{
				backgroundColor: "#FFFFFF",
				borderBottom: "1px solid #E0E0E0",
			}}>
			<Toolbar sx={{ px: { xs: 2, md: 4 }, py: 0.5 }}>
				<Box
					component={Link}
					href="/"
					sx={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						textDecoration: "none",
						color: "inherit",
					}}>
					<Image
						src="/images/florian-technologies-title.jpg"
						alt="Florian Technologies Logo"
						width={300}
						height={120}
						priority
						style={{
							borderRadius: "8px",
							objectFit: "contain",
							maxWidth: "300px",
							height: "auto",
						}}
					/>
				</Box>
				<Box sx={{ flexGrow: 1 }} />
				<Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
					{menuItems.slice(0, -1).map((item) => (
						<Button
							key={item.text}
							component={Link}
							href={item.href}
							sx={menuButtonStyles}>
							{item.text}
						</Button>
					))}
				</Box>

				{/* Add space between menu and Contact button */}
				<Box sx={{ ml: 3, display: { xs: "none", md: "block" } }}>
					<Button
						variant="contained"
						component={Link}
						href="/contact"
						sx={{
							"backgroundColor": "#2E7D32",
							"borderRadius": "8px",
							"px": 3,
							"py": 1.2,
							"fontSize": "0.95rem",
							"fontWeight": 500,
							"position": "relative",
							"overflow": "hidden",
							"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							"margin": "0 2px",
							"&::before": {
								content: '""',
								position: "absolute",
								top: 0,
								left: "-100%",
								width: "100%",
								height: "100%",
								backgroundColor: "#1B5E20",
								transition: "left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								zIndex: -1,
							},
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: "0 6px 16px rgba(46, 125, 50, 0.35)",
							},
							"&:hover::before": {
								left: 0,
							},
						}}>
						Contact
					</Button>
				</Box>
				<IconButton
					size="large"
					edge="end"
					color="inherit"
					aria-label="menu"
					onClick={handleDrawerToggle}
					sx={{
						"display": { xs: "flex", md: "none" },
						"color": "#2E7D32",
						"p": 1.5,
						"transition": "all 0.3s ease",
						"&:hover": {
							backgroundColor: "#E8F5E8",
							transform: "scale(1.05)",
						},
					}}>
					<MenuIcon sx={{ fontSize: "1.5rem" }} />
				</IconButton>
			</Toolbar>

			{/* Mobile Drawer */}
			<Drawer
				anchor="right"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					"display": { xs: "block", md: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: 320,
						backgroundColor: "#FFFFFF",
						backdropFilter: "blur(20px)",
						borderLeft: "1px solid rgba(46, 125, 50, 0.1)",
						boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.1)",
					},
				}}>
				{/* Header Section with Logo and Close */}
				<Box
					sx={{
						p: 3,
						background: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
					}}>
					<Box>
						<Image
							src="/images/florian-technologies-title.jpg"
							alt="Florian Technologies Logo"
							width={180}
							height={72}
							style={{
								borderRadius: "8px",
								objectFit: "contain",
								maxWidth: "180px",
								height: "auto",
								filter: "brightness(1.1) contrast(1.1)",
							}}
						/>
					</Box>
					<IconButton
						onClick={handleDrawerToggle}
						sx={{
							"color": "#FFFFFF",
							"backgroundColor": "rgba(255, 255, 255, 0.1)",
							"backdropFilter": "blur(10px)",
							"&:hover": {
								backgroundColor: "rgba(255, 255, 255, 0.2)",
								transform: "scale(1.05)",
							},
							"transition": "all 0.3s ease",
						}}>
						<CloseIcon />
					</IconButton>
				</Box>

				{/* Navigation Menu */}
				<Box sx={{ flex: 1, py: 2 }}>
					<List sx={{ pt: 0 }}>
						{menuItems.map((item) => (
							<ListItem key={item.text} disablePadding>
								<ListItemButton
									component={Link}
									href={item.href}
									onClick={handleDrawerToggle}
									sx={{
										"py": 2.5,
										"px": 3,
										"mx": 2,
										"mb": 1,
										"borderRadius": "12px",
										"transition":
											"all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
										"position": "relative",
										"overflow": "hidden",
										"&::before": {
											content: '""',
											position: "absolute",
											top: 0,
											left: "-100%",
											width: "100%",
											height: "100%",
											background:
												"linear-gradient(135deg, #E8F5E8 0%, rgba(46, 125, 50, 0.1) 100%)",
											transition:
												"left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
											zIndex: -1,
										},
										"&:hover": {
											"backgroundColor": "transparent",
											"transform": "translateX(8px)",
											"boxShadow": "0 4px 20px rgba(46, 125, 50, 0.15)",
											"& .MuiListItemText-primary": {
												color: "#2E7D32",
												fontWeight: 600,
											},
										},
										"&:hover::before": {
											left: 0,
										},
										"&:active": {
											transform: "translateX(4px) scale(0.98)",
										},
									}}>
									<ListItemText
										primary={item.text}
										slotProps={{
											primary: {
												sx: {
													fontSize: "1.1rem",
													fontWeight: 500,
													color: "#2C3E50",
													fontFamily: "Poppins, sans-serif",
												},
											},
										}}
									/>
									<Box
										sx={{
											"width": 6,
											"height": 6,
											"borderRadius": "50%",
											"backgroundColor": "#2E7D32",
											"opacity": 0,
											"transition": "opacity 0.3s ease",
											"ml": 1,
											".MuiListItemButton-root:hover &": {
												opacity: 1,
											},
										}}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>

				{/* Contact Button Section */}
				<Box sx={{ p: 3, pt: 0 }}>
					<Button
						variant="contained"
						component={Link}
						href="/contact"
						fullWidth
						onClick={handleDrawerToggle}
						sx={{
							"background": "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
							"borderRadius": "12px",
							"py": 2,
							"fontSize": "1.1rem",
							"fontWeight": 600,
							"fontFamily": "Poppins, sans-serif",
							"textTransform": "none",
							"boxShadow": "0 6px 20px rgba(46, 125, 50, 0.3)",
							"position": "relative",
							"overflow": "hidden",
							"&::before": {
								content: '""',
								position: "absolute",
								top: 0,
								left: "-100%",
								width: "100%",
								height: "100%",
								background: "linear-gradient(135deg, #1B5E20 0%, #0D4E12 100%)",
								transition: "left 0.4s ease",
								zIndex: -1,
							},
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: "0 8px 25px rgba(46, 125, 50, 0.4)",
							},
							"&:hover::before": {
								left: 0,
							},
							"&:active": {
								transform: "translateY(0px)",
							},
						}}>
						Get In Touch
					</Button>

					{/* Decorative Element */}
					<Typography
						variant="caption"
						sx={{
							display: "block",
							textAlign: "center",
							mt: 2,
							color: "#7F8C8D",
							fontStyle: "italic",
							fontSize: "0.8rem",
						}}>
						Ready to innovate together?
					</Typography>
				</Box>
			</Drawer>
		</AppBar>
	);
};

export default Header;
