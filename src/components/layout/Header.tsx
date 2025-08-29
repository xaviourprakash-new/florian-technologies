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
import { usePathname } from "next/navigation";
import { useIsClient } from "@/hooks/useClient";

const Header: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = usePathname();
	const isClient = useIsClient();

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

	const getMenuButtonStyles = (href: string) => {
		// Only calculate active state on client to prevent hydration mismatch
		const isActive = isClient
			? href === "/"
				? pathname === "/"
				: pathname.startsWith(href)
			: false;
		return {
			"color": isActive ? "#1B5E20" : "#2C3E50",
			"fontSize": "0.95rem",
			"fontWeight": isActive ? 600 : 500,
			"px": 3,
			"py": 1.5,
			"borderRadius": "10px",
			"position": "relative",
			"overflow": "hidden",
			"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
			"margin": "0 4px",
			"backgroundColor": isActive ? "rgba(46, 125, 50, 0.08)" : "transparent",
			"border": isActive
				? "1px solid rgba(46, 125, 50, 0.2)"
				: "1px solid transparent",
			"&::before": {
				content: '""',
				position: "absolute",
				bottom: 0,
				left: isActive ? 0 : "-100%",
				width: "100%",
				height: "2px",
				background: "linear-gradient(90deg, #2E7D32, #4CAF50)",
				transition: "left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				borderRadius: "1px 1px 0 0",
			},
			"&::after": {
				content: '""',
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background:
					"linear-gradient(135deg, rgba(46, 125, 50, 0.03) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(46, 125, 50, 0.05) 100%)",
				opacity: isActive ? 1 : 0,
				transition: "opacity 0.4s ease",
				zIndex: -1,
				borderRadius: "10px",
			},
			"&:hover": {
				color: "#1B5E20",
				transform: "translateY(-2px)",
				backgroundColor: "transparent",
				borderColor: "rgba(46, 125, 50, 0.1)",
				boxShadow:
					"0 4px 12px rgba(46, 125, 50, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
			},
			"&:hover::before": {
				left: 0,
			},
			"&:hover::after": {
				opacity: 1,
			},
		};
	};

	return (
		<AppBar
			position="static"
			elevation={0}
			sx={{
				"backgroundColor": "#FFFFFF",
				"borderBottom": "1px solid #E0E0E0",
				"position": "relative",
				"overflow": "hidden",
				"&::after": {
					content: '""',
					position: "absolute",
					top: 0,
					right: 0,
					width: "80%",
					height: "100%",
					backgroundImage: "url('/images/leafy_background.png')",
					backgroundSize: "auto 120%",
					backgroundPosition: "right center",
					backgroundRepeat: "repeat-x",
					maskImage:
						"linear-gradient(to right, transparent 0%, transparent 5%, rgba(0,0,0,0.005) 10%, rgba(0,0,0,0.01) 15%, rgba(0,0,0,0.015) 20%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.03) 35%, rgba(0,0,0,0.04) 45%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0.12) 75%, rgba(0,0,0,0.18) 85%, rgba(0,0,0,0.25) 95%, rgba(0,0,0,0.3) 100%)",
					WebkitMaskImage:
						"linear-gradient(to right, transparent 0%, transparent 5%, rgba(0,0,0,0.005) 10%, rgba(0,0,0,0.01) 15%, rgba(0,0,0,0.015) 20%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.03) 35%, rgba(0,0,0,0.04) 45%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0.12) 75%, rgba(0,0,0,0.18) 85%, rgba(0,0,0,0.25) 95%, rgba(0,0,0,0.3) 100%)",
					opacity: 1,
					pointerEvents: "none",
					zIndex: 0,
					display: { xs: "none", md: "block" },
				},
			}}>
			<Toolbar
				sx={{ px: { xs: 2, md: 4 }, py: 0.5, position: "relative", zIndex: 1 }}>
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
						src="/images/floriantechnologies-title.jpg"
						alt="Florian Technologies Logo"
						width={300}
						height={120}
						priority
						className="header-logo"
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
							sx={getMenuButtonStyles(item.href)}>
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
							"background": "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
							"borderRadius": "12px",
							"px": 3,
							"py": 1.5,
							"fontSize": "0.95rem",
							"fontWeight": 600,
							"position": "relative",
							"overflow": "hidden",
							"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							"margin": "0 2px",
							"border": "1px solid rgba(255, 255, 255, 0.2)",
							"boxShadow":
								"0 4px 16px rgba(46, 125, 50, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							"backdropFilter": "blur(10px)",
							"color": "#ffffff",
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
							"&::after": {
								content: '""',
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								background:
									"linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(46, 125, 50, 0.1) 100%)",
								opacity: 0,
								transition: "opacity 0.4s ease",
								borderRadius: "12px",
								pointerEvents: "none",
							},
							"&:hover": {
								transform: "translateY(-3px) scale(1.02)",
								boxShadow:
									"0 8px 24px rgba(46, 125, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
							},
							"&:hover::before": {
								left: 0,
							},
							"&:hover::after": {
								opacity: 1,
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
						"mr": 2,
						"borderRadius": "12px",
						"background":
							"linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(255, 255, 255, 0.8) 100%)",
						"border": "1px solid rgba(46, 125, 50, 0.1)",
						"backdropFilter": "blur(10px)",
						"boxShadow":
							"0 2px 8px rgba(46, 125, 50, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
						"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
						"&:hover": {
							background:
								"linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)",
							transform: "scale(1.08) translateY(-1px)",
							boxShadow:
								"0 4px 16px rgba(46, 125, 50, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
							borderColor: "rgba(46, 125, 50, 0.2)",
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
							src="/images/floriantechnologies-title.jpg"
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
						{menuItems.map((item) => {
							const isActive = isClient
								? item.href === "/"
									? pathname === "/"
									: pathname.startsWith(item.href)
								: false;
							return (
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
											"backgroundColor": isActive
												? "rgba(46, 125, 50, 0.1)"
												: "transparent",
											"borderLeft": isActive
												? "3px solid #2E7D32"
												: "3px solid transparent",
											"&::before": {
												content: '""',
												position: "absolute",
												top: 0,
												left: isActive ? 0 : "-100%",
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
														fontWeight: isActive ? 600 : 500,
														color: isActive ? "#2E7D32" : "#2C3E50",
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
												"opacity": isActive ? 1 : 0,
												"transition": "opacity 0.3s ease",
												"ml": 1,
												".MuiListItemButton-root:hover &": {
													opacity: 1,
												},
											}}
										/>
									</ListItemButton>
								</ListItem>
							);
						})}
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
