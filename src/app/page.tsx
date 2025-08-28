import {
	Container,
	Typography,
	Box,
	Button,
	Card,
	CardContent,
} from "@mui/material";
import Link from "next/link";
import {
	generatePageMetadata,
	generateOrganizationSchema,
	generateWebsiteSchema,
} from "../lib/seo";
import SEOScript from "../components/SEOScript";
import ImageCarousel from "../components/ImageCarousel";

export const metadata = generatePageMetadata("home");

export default function HomePage() {
	const schemas = [generateOrganizationSchema(), generateWebsiteSchema()];

	return (
		<>
			<SEOScript schemas={schemas} />
			<Container maxWidth="lg">
				{/* Hero Carousel Section */}
				<Box sx={{ py: { xs: 4, md: 6 } }}>
					<ImageCarousel />
				</Box>

				{/* Subtitle Section */}
				<Box
					sx={{
						py: { xs: 6, md: 8 },
						textAlign: "center",
					}}>
					<Typography
						variant="h2"
						component="p"
						sx={{
							"fontSize": { xs: "1.2rem", md: "1.5rem" },
							"color": "#5D6D7E",
							"mb": 4,
							"maxWidth": "800px",
							"mx": "auto",
							"lineHeight": 1.6,
							"opacity": 0,
							"animation": "fadeInUp 1s ease-out 0.5s forwards",
							"@keyframes fadeInUp": {
								from: {
									opacity: 0,
									transform: "translateY(20px)",
								},
								to: {
									opacity: 1,
									transform: "translateY(0)",
								},
							},
						}}>
						We design and deliver cutting edge medical products for hospitals
						and pharmacies while providing IT and consulting services across
						industries.
					</Typography>
					<Typography
						variant="h3"
						component="p"
						sx={{
							fontSize: { xs: "1rem", md: "1.2rem" },
							color: "#2E7D32",
							mb: 6,
							fontWeight: 600,
						}}>
						Our Promise: Time-Bound Excellence, Precision and Customer Centric
						Solutions.
					</Typography>
					<Box
						sx={{
							display: "flex",
							gap: 3,
							justifyContent: "center",
							flexWrap: "wrap",
						}}>
						<Button
							variant="contained"
							size="large"
							component={Link}
							href="/products"
							sx={{
								"backgroundColor": "#2E7D32",
								"px": 4,
								"py": 1.5,
								"fontSize": "1.1rem",
								"&:hover": { backgroundColor: "#1B5E20" },
							}}>
							Explore Products
						</Button>
						<Button
							variant="outlined"
							size="large"
							component={Link}
							href="/services"
							sx={{
								"borderColor": "#2E7D32",
								"color": "#2E7D32",
								"px": 4,
								"py": 1.5,
								"fontSize": "1.1rem",
								"&:hover": {
									borderColor: "#1B5E20",
									backgroundColor: "#E8F5E8",
								},
							}}>
							View Services
						</Button>
					</Box>
				</Box>

				{/* Key Pillars Section */}
				<Box sx={{ py: 8 }}>
					<Typography
						variant="h2"
						component="h2"
						sx={{
							fontSize: { xs: "2rem", md: "2.5rem" },
							fontWeight: 600,
							color: "#2C3E50",
							textAlign: "center",
							mb: 6,
						}}>
						Our Foundation
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							gap: 4,
						}}>
						<Box sx={{ flex: 1 }}>
							<Card
								sx={{
									"height": "100%",
									"textAlign": "center",
									"p": 3,
									"background":
										"linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
									"position": "relative",
									"overflow": "hidden",
									"&::before": {
										content: '""',
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										height: "4px",
										background: "linear-gradient(90deg, #2E7D32, #66BB6A)",
										transform: "scaleX(0)",
										transformOrigin: "left",
										transition: "transform 0.3s ease",
									},
									"&:hover::before": {
										transform: "scaleX(1)",
									},
									"&:hover .card-icon": {
										transform: "scale(1.1) rotate(5deg)",
									},
								}}>
								<CardContent>
									<Box
										className="card-icon"
										sx={{
											width: 64,
											height: 64,
											margin: "0 auto 16px",
											backgroundColor: "#E8F5E8",
											borderRadius: "50%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
											fontSize: "2rem",
										}}>
										🏥
									</Box>
									<Typography
										variant="h3"
										component="h3"
										sx={{
											fontSize: "1.5rem",
											fontWeight: 600,
											color: "#2E7D32",
											mb: 2,
										}}>
										Medical Innovation
									</Typography>
									<Typography variant="body1" color="text.secondary">
										Cutting-edge medical products designed with precision,
										safety and compliance for modern healthcare facilities.
									</Typography>
								</CardContent>
							</Card>
						</Box>
						<Box sx={{ flex: 1 }}>
							<Card
								sx={{
									"height": "100%",
									"textAlign": "center",
									"p": 3,
									"background":
										"linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
									"position": "relative",
									"overflow": "hidden",
									"&::before": {
										content: '""',
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										height: "4px",
										background: "linear-gradient(90deg, #2E7D32, #66BB6A)",
										transform: "scaleX(0)",
										transformOrigin: "left",
										transition: "transform 0.3s ease",
									},
									"&:hover::before": {
										transform: "scaleX(1)",
									},
									"&:hover .card-icon": {
										transform: "scale(1.1) rotate(5deg)",
									},
								}}>
								<CardContent>
									<Box
										className="card-icon"
										sx={{
											width: 64,
											height: 64,
											margin: "0 auto 16px",
											backgroundColor: "#E8F5E8",
											borderRadius: "50%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
											fontSize: "2rem",
										}}>
										🎯
									</Box>
									<Typography
										variant="h3"
										component="h3"
										sx={{
											fontSize: "1.5rem",
											fontWeight: 600,
											color: "#2E7D32",
											mb: 2,
										}}>
										Cross Domain Expertise
									</Typography>
									<Typography variant="body1" color="text.secondary">
										Comprehensive IT and consulting services spanning multiple
										industries with tailored solutions.
									</Typography>
								</CardContent>
							</Card>
						</Box>
						<Box sx={{ flex: 1 }}>
							<Card
								sx={{
									"height": "100%",
									"textAlign": "center",
									"p": 3,
									"background":
										"linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
									"position": "relative",
									"overflow": "hidden",
									"&::before": {
										content: '""',
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										height: "4px",
										background: "linear-gradient(90deg, #2E7D32, #66BB6A)",
										transform: "scaleX(0)",
										transformOrigin: "left",
										transition: "transform 0.3s ease",
									},
									"&:hover::before": {
										transform: "scaleX(1)",
									},
									"&:hover .card-icon": {
										transform: "scale(1.1) rotate(-5deg)",
									},
								}}>
								<CardContent>
									<Box
										className="card-icon"
										sx={{
											width: 64,
											height: 64,
											margin: "0 auto 16px",
											backgroundColor: "#E8F5E8",
											borderRadius: "50%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
											fontSize: "2rem",
										}}>
										🤝
									</Box>
									<Typography
										variant="h3"
										component="h3"
										sx={{
											fontSize: "1.5rem",
											fontWeight: 600,
											color: "#2E7D32",
											mb: 2,
										}}>
										Client First Approach
									</Typography>
									<Typography variant="body1" color="text.secondary">
										Customer-centric solutions with proven track record of
										innovation and industry-certified excellence.
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Box>
				</Box>

				{/* Quick Links Section */}
				<Box sx={{ py: 8 }}>
					<Typography
						variant="h2"
						component="h2"
						sx={{
							fontSize: { xs: "2rem", md: "2.5rem" },
							fontWeight: 600,
							color: "#2C3E50",
							textAlign: "center",
							mb: 6,
						}}>
						Explore Our Solutions
					</Typography>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
							gap: 4,
							alignItems: "stretch",
						}}>
						<Card
							component={Link}
							href="/products"
							sx={{
								"textDecoration": "none",
								"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								"background":
									"linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
								"border": "1px solid #E8F5E8",
								"borderRadius": "16px",
								"position": "relative",
								"overflow": "hidden",
								"boxShadow": "0 4px 20px rgba(46, 125, 50, 0.08)",
								"&::before": {
									content: '""',
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									height: "4px",
									background: "linear-gradient(90deg, #2E7D32, #66BB6A)",
									transform: "scaleX(0)",
									transformOrigin: "left",
									transition: "transform 0.4s ease",
								},
								"&:hover": {
									transform: "translateY(-12px)",
									boxShadow: "0 20px 40px rgba(46, 125, 50, 0.2)",
									borderColor: "#2E7D32",
								},
								"&:hover::before": {
									transform: "scaleX(1)",
								},
								"&:hover .card-icon": {
									transform: "scale(1.15) rotate(5deg)",
									backgroundColor: "#2E7D32",
									color: "#ffffff",
								},
								"&:hover .card-button": {
									backgroundColor: "#1B5E20",
									transform: "scale(1.05)",
								},
							}}>
							<CardContent
								sx={{
									p: 5,
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									height: "100%",
								}}>
								<Box
									className="card-icon"
									sx={{
										width: 80,
										height: 80,
										margin: "0 auto 24px",
										backgroundColor: "#E8F5E8",
										color: "#2E7D32",
										borderRadius: "20px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
										fontSize: "2.5rem",
										border: "2px solid #E8F5E8",
									}}>
									🔬
								</Box>
								<Typography
									variant="h3"
									component="h3"
									sx={{
										fontSize: "1.5rem",
										fontWeight: 700,
										color: "#2E7D32",
										mb: 2,
										fontFamily: "Poppins, sans-serif",
									}}>
									Medical Products
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									sx={{
										mb: 4,
										lineHeight: 1.6,
										fontSize: "1rem",
										flex: 1,
										display: "flex",
										alignItems: "center",
									}}>
									Hospital diagnostic devices, pharmacy automation systems and
									patient management tools.
								</Typography>
								<Button
									className="card-button"
									variant="contained"
									sx={{
										backgroundColor: "#2E7D32",
										borderRadius: "12px",
										px: 3,
										py: 1.5,
										fontSize: "0.95rem",
										fontWeight: 600,
										transition: "all 0.3s ease",
										textTransform: "none",
										mt: "auto",
									}}>
									View Products
								</Button>
							</CardContent>
						</Card>

						<Card
							component={Link}
							href="/services"
							sx={{
								"textDecoration": "none",
								"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								"background":
									"linear-gradient(135deg, #ffffff 0%, #fffcf8 100%)",
								"border": "1px solid #FFF3E0",
								"borderRadius": "16px",
								"position": "relative",
								"overflow": "hidden",
								"boxShadow": "0 4px 20px rgba(255, 143, 0, 0.08)",
								"&::before": {
									content: '""',
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									height: "4px",
									background: "linear-gradient(90deg, #FF8F00, #FFB74D)",
									transform: "scaleX(0)",
									transformOrigin: "left",
									transition: "transform 0.4s ease",
								},
								"&:hover": {
									transform: "translateY(-12px)",
									boxShadow: "0 20px 40px rgba(255, 143, 0, 0.2)",
									borderColor: "#FF8F00",
								},
								"&:hover::before": {
									transform: "scaleX(1)",
								},
								"&:hover .card-icon": {
									transform: "scale(1.15) rotate(-5deg)",
									backgroundColor: "#FF8F00",
									color: "#ffffff",
								},
								"&:hover .card-button": {
									backgroundColor: "#F57C00",
									transform: "scale(1.05)",
								},
							}}>
							<CardContent
								sx={{
									p: 5,
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									height: "100%",
								}}>
								<Box
									className="card-icon"
									sx={{
										width: 80,
										height: 80,
										margin: "0 auto 24px",
										backgroundColor: "#FFF3E0",
										color: "#FF8F00",
										borderRadius: "20px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
										fontSize: "2.5rem",
										border: "2px solid #FFF3E0",
									}}>
									🚀
								</Box>
								<Typography
									variant="h3"
									component="h3"
									sx={{
										fontSize: "1.5rem",
										fontWeight: 700,
										color: "#FF8F00",
										mb: 2,
										fontFamily: "Poppins, sans-serif",
									}}>
									IT Services
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									sx={{
										mb: 4,
										lineHeight: 1.6,
										fontSize: "1rem",
										flex: 1,
										display: "flex",
										alignItems: "center",
									}}>
									IT consulting, software development, cloud solutions and data
									analytics for business transformation.
								</Typography>
								<Button
									className="card-button"
									variant="contained"
									sx={{
										backgroundColor: "#FF8F00",
										borderRadius: "12px",
										px: 3,
										py: 1.5,
										fontSize: "0.95rem",
										fontWeight: 600,
										transition: "all 0.3s ease",
										textTransform: "none",
										mt: "auto",
									}}>
									View Services
								</Button>
							</CardContent>
						</Card>

						<Card
							component={Link}
							href="/contact"
							sx={{
								"textDecoration": "none",
								"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								"background":
									"linear-gradient(135deg, #ffffff 0%, #f8f8ff 100%)",
								"border": "1px solid #F3E5F5",
								"borderRadius": "16px",
								"position": "relative",
								"overflow": "hidden",
								"boxShadow": "0 4px 20px rgba(156, 39, 176, 0.08)",
								"&::before": {
									content: '""',
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									height: "4px",
									background: "linear-gradient(90deg, #9C27B0, #E1BEE7)",
									transform: "scaleX(0)",
									transformOrigin: "left",
									transition: "transform 0.4s ease",
								},
								"&:hover": {
									transform: "translateY(-12px)",
									boxShadow: "0 20px 40px rgba(156, 39, 176, 0.2)",
									borderColor: "#9C27B0",
								},
								"&:hover::before": {
									transform: "scaleX(1)",
								},
								"&:hover .card-icon": {
									transform: "scale(1.15) rotate(5deg)",
									backgroundColor: "#9C27B0",
									color: "#ffffff",
								},
								"&:hover .card-button": {
									backgroundColor: "#7B1FA2",
									transform: "scale(1.05)",
								},
							}}>
							<CardContent
								sx={{
									p: 5,
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									height: "100%",
								}}>
								<Box
									className="card-icon"
									sx={{
										width: 80,
										height: 80,
										margin: "0 auto 24px",
										backgroundColor: "#F3E5F5",
										color: "#9C27B0",
										borderRadius: "20px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
										fontSize: "2.5rem",
										border: "2px solid #F3E5F5",
									}}>
									📞
								</Box>
								<Typography
									variant="h3"
									component="h3"
									sx={{
										fontSize: "1.5rem",
										fontWeight: 700,
										color: "#9C27B0",
										mb: 2,
										fontFamily: "Poppins, sans-serif",
									}}>
									Get in Touch
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									sx={{
										mb: 4,
										lineHeight: 1.6,
										fontSize: "1rem",
										flex: 1,
										display: "flex",
										alignItems: "center",
									}}>
									Ready to partner with us? Contact our team for quotes,
									consultations, or support.
								</Typography>
								<Button
									className="card-button"
									variant="contained"
									sx={{
										backgroundColor: "#9C27B0",
										borderRadius: "12px",
										px: 3,
										py: 1.5,
										fontSize: "0.95rem",
										fontWeight: 600,
										transition: "all 0.3s ease",
										textTransform: "none",
										mt: "auto",
									}}>
									Contact Us
								</Button>
							</CardContent>
						</Card>
					</Box>
				</Box>
			</Container>
		</>
	);
}
