import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import {
	generatePageMetadata,
	generateOrganizationSchema,
} from "../../lib/seo";
import SEOScript from "../../components/SEOScript";

export const metadata = generatePageMetadata("about");

export default function AboutPage() {
	const schemas = [generateOrganizationSchema()];

	const teamMembers = [
		{
			name: "Dr. Sarah Chen",
			position: "Chief Technology Officer",
			background:
				"Former FDA consultant with 15+ years in medical device development",
			expertise: "Regulatory Compliance, Medical Device Innovation",
		},
		{
			name: "Michael Rodriguez",
			position: "Head of Software Development",
			background: "Ex-Epic Systems architect with healthcare IT expertise",
			expertise: "Healthcare Software, System Integration",
		},
		{
			name: "Emily Watson",
			position: "Director of Operations",
			background: "MBA from Wharton, former McKinsey healthcare consultant",
			expertise: "Business Strategy, Operations Management",
		},
	];

	const milestones = [
		{
			year: "2018",
			title: "Company Founded",
			description:
				"Florian Technologies established with a vision to innovate healthcare technology",
		},
		{
			year: "2019",
			title: "First FDA Approval",
			description:
				"Received FDA approval for our flagship diagnostic imaging system",
		},
		{
			year: "2020",
			title: "Telehealth Expansion",
			description:
				"Launched telemedicine platform during the global health crisis",
		},
		{
			year: "2021",
			title: "International Expansion",
			description: "Obtained CE certification and expanded to European markets",
		},
		{
			year: "2022",
			title: "AI Integration",
			description:
				"Integrated AI and machine learning into our diagnostic solutions",
		},
		{
			year: "2023",
			title: "Industry Recognition",
			description: 'Awarded "Healthcare Innovation Company of the Year"',
		},
	];

	return (
		<>
			<SEOScript schemas={schemas} />

			{/* Enhanced Hero Image Section with Responsive Layout */}
			<Box
				sx={{
					position: "relative",
					width: "100%",
					maxWidth: { xs: "100%", md: "90%", lg: "85%", xl: "80%" },
					mx: "auto",
					overflow: "hidden",
					px: { xs: 2, md: 4, lg: 6, xl: 8 },
					py: { xs: 3, md: 4, lg: 5, xl: 6 },
				}}>
				{/* Image Container - Responsive Height */}
				<Box
					sx={{
						"position": "relative",
						"height": { xs: "400px", md: "700px", lg: "800px", xl: "900px" },
						"display": "flex",
						"alignItems": "center",
						"justifyContent": "center",
						"perspective": "1000px",
						"&:hover": {
							"& .hero-image": {
								transform: "scale(1.02) rotateY(1deg)",
							},
							"& .hero-content-overlay": {
								transform:
									"translate(-50%, -50%) translateY(-10px) perspective(800px) rotateX(5deg)",
							},
						},
					}}>
					<Box
						className="hero-image"
						sx={{
							position: "absolute",
							top: { xs: "15px", md: "20px", lg: "25px", xl: "30px" },
							left: { xs: "15px", md: "10%", lg: "10%", xl: "10%" },
							right: { xs: "15px", md: "10%", lg: "10%", xl: "10%" },
							bottom: { xs: "15px", md: "20px", lg: "25px", xl: "30px" },
							borderRadius: { xs: "16px", md: "20px", lg: "24px", xl: "28px" },
							overflow: "hidden",
							border: "1px solid rgba(255, 255, 255, 0.2)",
							backdropFilter: "blur(10px)",
							transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
						}}>
						<Image
							src="/images/it_consultants_discussion.png"
							alt="About Florian Technologies Team"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							priority
						/>
					</Box>
				</Box>

				{/* Desktop Overlay Content - Only on Desktop */}
				<Box
					className="hero-content-overlay"
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: 10,
						textAlign: "center",
						color: "white",
						px: { md: 4, lg: 6, xl: 8 },
						py: { md: 4, lg: 5, xl: 6 },
						transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
						display: { xs: "none", md: "block" },
						width: "90%",
						maxWidth: "800px",
					}}>
					<Typography
						variant="h1"
						component="h1"
						sx={{
							fontSize: { md: "4rem", lg: "4.5rem", xl: "5rem" },
							fontWeight: 700,
							mb: { lg: 4, xl: 5 },
							textShadow:
								"0 2px 4px rgba(0, 0, 0, 1), 0 4px 8px rgba(0, 0, 0, 0.8), 0 8px 16px rgba(0, 0, 0, 0.6)",
							fontFamily: "Poppins, sans-serif",
							color: "white",
						}}>
						About Florian Technologies
					</Typography>
					<Typography
						variant="h2"
						component="p"
						sx={{
							fontSize: {
								md: "1.7rem",
								lg: "1.9rem",
								xl: "2.1rem",
							},
							fontWeight: 400,
							opacity: 0.95,
							maxWidth: { lg: "800px", xl: "900px" },
							mx: "auto",
							lineHeight: 1.6,
							color: "white",
							textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
						}}>
						Leading innovation in healthcare technology and IT solutions since
						2019
					</Typography>
				</Box>

				{/* Mobile Content Below Image - Only on Mobile */}
				<Box
					sx={{
						display: { xs: "block", md: "none" },
						textAlign: "center",
						mt: 4,
						px: 2,
					}}>
					<Typography
						variant="h1"
						component="h1"
						sx={{
							fontSize: "2.5rem",
							fontWeight: 700,
							mb: 3,
							fontFamily: "Poppins, sans-serif",
							color: "#2E7D32",
							background: "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}>
						About Florian Technologies
					</Typography>
					<Typography
						variant="h2"
						component="p"
						sx={{
							fontSize: "1.2rem",
							fontWeight: 400,
							lineHeight: 1.6,
							color: "#555",
							maxWidth: "600px",
							mx: "auto",
						}}>
						Leading innovation in healthcare technology and IT solutions since
						2019
					</Typography>
				</Box>
			</Box>

			<Container maxWidth="lg">
				{/* Introduction Section */}
				<Box
					sx={{
						py: { xs: 6, md: 8 },
						textAlign: "center",
					}}>
					<Typography
						variant="h3"
						component="p"
						sx={{
							fontSize: { xs: "1.1rem", md: "1.3rem" },
							color: "#5D6D7E",
							mb: 4,
							maxWidth: "800px",
							mx: "auto",
							lineHeight: 1.6,
						}}>
						We are a hybrid IT startup specializing in medical products for
						hospitals and pharmacies, while providing comprehensive technology
						consulting services across multiple industries.
					</Typography>
				</Box>

				{/* Mission & Vision Section */}
				<Box sx={{ py: 8 }}>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							gap: 4,
						}}>
						<Card
							sx={{
								"flex": 1,
								"p": 4,
								"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								"background":
									"linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
								"&:hover": {
									transform: "translateY(-8px)",
									boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
								},
							}}>
							<CardContent sx={{ p: 0, textAlign: "center" }}>
								<Typography
									variant="h3"
									component="h3"
									sx={{
										fontSize: "1.8rem",
										fontWeight: 600,
										color: "#2E7D32",
										mb: 3,
									}}>
									Our Mission
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
									To revolutionize healthcare through innovative medical
									technology while delivering exceptional IT consulting services
									that drive digital transformation across industries. We are
									committed to improving patient outcomes and operational
									efficiency through cutting-edge solutions.
								</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								"flex": 1,
								"p": 4,
								"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								"background":
									"linear-gradient(135deg, #ffffff 0%, #fffcf8 100%)",
								"&:hover": {
									transform: "translateY(-8px)",
									boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
								},
							}}>
							<CardContent sx={{ p: 0, textAlign: "center" }}>
								<Typography
									variant="h3"
									component="h3"
									sx={{
										fontSize: "1.8rem",
										fontWeight: 600,
										color: "#FF8F00",
										mb: 3,
									}}>
									Our Vision
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
									To be the leading global provider of healthcare technology
									solutions and multi-domain IT services, recognized for our
									innovation, quality and customer-centric approach. We envision
									a future where technology seamlessly enhances human health and
									business success.
								</Typography>
							</CardContent>
						</Card>
					</Box>
				</Box>

				{/* Core Values Section */}
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
						Our Core Values
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							gap: 4,
						}}>
						<Card sx={{ flex: 1, p: 3, textAlign: "center" }}>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.3rem",
									fontWeight: 600,
									color: "#2E7D32",
									mb: 2,
								}}>
								Innovation
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Continuously pushing boundaries with cutting-edge technology and
								creative solutions
							</Typography>
						</Card>
						<Card sx={{ flex: 1, p: 3, textAlign: "center" }}>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.3rem",
									fontWeight: 600,
									color: "#2E7D32",
									mb: 2,
								}}>
								Quality
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Maintaining the highest standards in all our products and
								services
							</Typography>
						</Card>
						<Card sx={{ flex: 1, p: 3, textAlign: "center" }}>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.3rem",
									fontWeight: 600,
									color: "#2E7D32",
									mb: 2,
								}}>
								Integrity
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Building trust through transparency, honesty and ethical
								business practices
							</Typography>
						</Card>
						<Card sx={{ flex: 1, p: 3, textAlign: "center" }}>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.3rem",
									fontWeight: 600,
									color: "#2E7D32",
									mb: 2,
								}}>
								Customer Focus
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Putting our clients&apos; needs first and delivering exceptional
								value
							</Typography>
						</Card>
					</Box>
				</Box>

				{/* Leadership Team Section */}
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
						Leadership Team
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
						{teamMembers.map((member, index) => (
							<Card
								key={index}
								sx={{
									p: 4,
									borderLeft: "4px solid #2E7D32",
								}}>
								<CardContent sx={{ p: 0 }}>
									<Box
										sx={{
											display: "flex",
											flexDirection: { xs: "column", md: "row" },
											gap: 3,
										}}>
										<Box sx={{ flex: 1 }}>
											<Typography
												variant="h3"
												component="h3"
												sx={{
													fontSize: "1.4rem",
													fontWeight: 600,
													color: "#2C3E50",
													mb: 1,
												}}>
												{member.name}
											</Typography>
											<Typography
												variant="h4"
												component="h4"
												sx={{
													fontSize: "1.1rem",
													fontWeight: 600,
													color: "#2E7D32",
													mb: 2,
												}}>
												{member.position}
											</Typography>
											<Typography
												variant="body1"
												color="text.secondary"
												sx={{ mb: 2, lineHeight: 1.6 }}>
												{member.background}
											</Typography>
											<Typography
												variant="body2"
												sx={{
													color: "#2E7D32",
													fontWeight: 600,
												}}>
												Expertise: {member.expertise}
											</Typography>
										</Box>
									</Box>
								</CardContent>
							</Card>
						))}
					</Box>
				</Box>

				{/* Company Timeline Section */}
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
						Our Journey
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
						{milestones.map((milestone, index) => (
							<Card
								key={index}
								sx={{
									p: 3,
									borderLeft: "3px solid #2E7D32",
									backgroundColor: index % 2 === 0 ? "#F8F9FA" : "white",
								}}>
								<CardContent sx={{ p: 0 }}>
									<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
										<Box
											sx={{
												minWidth: "80px",
												textAlign: "center",
											}}>
											<Typography
												variant="h4"
												component="h4"
												sx={{
													fontSize: "1.3rem",
													fontWeight: 700,
													color: "#2E7D32",
												}}>
												{milestone.year}
											</Typography>
										</Box>
										<Box sx={{ flex: 1 }}>
											<Typography
												variant="h3"
												component="h3"
												sx={{
													fontSize: "1.2rem",
													fontWeight: 600,
													color: "#2C3E50",
													mb: 1,
												}}>
												{milestone.title}
											</Typography>
											<Typography variant="body1" color="text.secondary">
												{milestone.description}
											</Typography>
										</Box>
									</Box>
								</CardContent>
							</Card>
						))}
					</Box>
				</Box>

				{/* Contact CTA Section */}
				<Box sx={{ py: 8, textAlign: "center" }}>
					<Typography
						variant="h2"
						component="h2"
						sx={{
							fontSize: { xs: "1.8rem", md: "2.2rem" },
							fontWeight: 600,
							color: "#2C3E50",
							mb: 3,
						}}>
						Ready to Partner with Us?
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: "#5D6D7E",
							mb: 4,
							maxWidth: "600px",
							mx: "auto",
							fontSize: "1.1rem",
						}}>
						Join hundreds of satisfied clients who trust Florian Technologies
						for their healthcare and IT solutions. Contact us today to discuss
						your project.
					</Typography>
				</Box>
			</Container>
		</>
	);
}
