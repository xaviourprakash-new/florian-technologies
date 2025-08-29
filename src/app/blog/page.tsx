import {
	Container,
	Typography,
	Box,
	Card,
	CardContent,
	Chip,
	Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { CalendarToday, Person, ArrowForward } from "@mui/icons-material";
import { generatePageMetadata } from "@/lib/seo";
import SEOScript from "@/components/SEOScript";

export const metadata = generatePageMetadata("blog");

export default function BlogPage() {
	const featuredPost = {
		title:
			"The Future of AI in Healthcare: Transforming Patient Care Through Technology",
		excerpt:
			"Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic imaging to personalized treatment plans and what this means for the future of medicine.",
		author: "Dr. Sarah Chen",
		date: "2024-01-15",
		dateFormatted: "January 15, 2024",
		category: "Healthcare Technology",
		readTime: "8 min read",
		slug: "future-ai-healthcare-transforming-patient-care",
	};

	const blogPosts = [
		{
			title:
				"HIPAA Compliance in the Cloud: Essential Guidelines for Healthcare Organizations",
			excerpt:
				"A comprehensive guide to maintaining HIPAA compliance when migrating healthcare data to cloud platforms, including best practices and security considerations.",
			author: "Michael Rodriguez",
			date: "2024-01-10",
			dateFormatted: "Jan 10, 2024",
			category: "Compliance",
			readTime: "6 min read",
			slug: "hipaa-compliance-cloud-healthcare-guidelines",
		},
		{
			title: "Streamlining Hospital Operations with Digital Workflow Solutions",
			excerpt:
				"Learn how digital workflow automation can reduce administrative overhead, improve patient satisfaction and enhance operational efficiency in healthcare facilities.",
			author: "Emily Watson",
			date: "2024-01-05",
			dateFormatted: "Jan 5, 2024",
			category: "Digital Transformation",
			readTime: "5 min read",
			slug: "streamlining-hospital-operations-digital-workflow",
		},
		{
			title: "The ROI of Medical Device Integration: Cost-Benefit Analysis",
			excerpt:
				"Discover the financial benefits of integrating medical devices with hospital information systems and how to calculate return on investment for healthcare technology.",
			author: "Dr. Sarah Chen",
			date: "2023-12-28",
			dateFormatted: "Dec 28, 2023",
			category: "Healthcare Economics",
			readTime: "7 min read",
			slug: "roi-medical-device-integration-cost-benefit",
		},
		{
			title:
				"Cybersecurity Threats in Healthcare: Protecting Patient Data in 2024",
			excerpt:
				"An in-depth look at emerging cybersecurity threats facing healthcare organizations and proven strategies to protect sensitive patient information.",
			author: "Michael Rodriguez",
			date: "2023-12-20",
			dateFormatted: "Dec 20, 2023",
			category: "Cybersecurity",
			readTime: "9 min read",
			slug: "cybersecurity-threats-healthcare-protecting-patient-data-2024",
		},
		{
			title: "Telemedicine Platform Selection: Key Features and Considerations",
			excerpt:
				"A detailed comparison of telemedicine platforms, essential features to look for and how to choose the right solution for your healthcare practice.",
			author: "Emily Watson",
			date: "2023-12-15",
			category: "Telehealth",
			readTime: "6 min read",
			slug: "telemedicine-platform-selection-key-features",
		},
		{
			title:
				"FDA Regulatory Updates: What Medical Device Manufacturers Need to Know",
			excerpt:
				"Stay current with the latest FDA regulatory changes affecting medical device manufacturers and how to ensure continued compliance.",
			author: "Dr. Sarah Chen",
			date: "2023-12-10",
			category: "Regulatory",
			readTime: "8 min read",
			slug: "fda-regulatory-updates-medical-device-manufacturers",
		},
	];

	const categories = [
		"All",
		"Healthcare Technology",
		"Compliance",
		"Digital Transformation",
		"Cybersecurity",
		"Telehealth",
		"Regulatory",
	];

	return (
		<>
			<SEOScript schemas={[]} />

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
								transform: "scale(1.02) rotateY(-1deg)",
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
							src="/images/medical_innovations_1.png"
							alt="Healthcare Technology Insights and Innovation"
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
						Healthcare Technology Insights
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
						Expert analysis, industry trends, and innovative solutions for
						healthcare technology
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
						Healthcare Technology Insights
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
						Expert analysis, industry trends, and innovative solutions for
						healthcare technology
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
						variant="body1"
						sx={{
							color: "#2E7D32",
							fontWeight: 600,
							fontSize: "1.1rem",
							mb: 2,
						}}>
						Stay Informed • Make Better Decisions • Drive Innovation
					</Typography>
					<Typography
						variant="h3"
						component="p"
						sx={{
							fontSize: { xs: "1rem", md: "1.2rem" },
							color: "#5D6D7E",
							maxWidth: "700px",
							mx: "auto",
							lineHeight: 1.6,
						}}>
						Expert insights, industry trends and practical guidance for
						healthcare technology professionals and IT decision-makers.
					</Typography>
				</Box>

				{/* Category Filter */}
				<Box sx={{ py: 4, textAlign: "center" }}>
					<Typography
						variant="h3"
						component="h3"
						sx={{
							fontSize: "1.2rem",
							fontWeight: 600,
							color: "#2C3E50",
							mb: 3,
						}}>
						Browse by Category
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							gap: 1,
							justifyContent: "center",
						}}>
						{categories.map((category, index) => (
							<Chip
								key={index}
								label={category}
								clickable
								sx={{
									"background":
										index === 0
											? "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)"
											: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 252, 248, 0.8) 100%)",
									"color": index === 0 ? "white" : "#2E7D32",
									"border": "1px solid rgba(46, 125, 50, 0.3)",
									"borderRadius": "20px",
									"fontWeight": 600,
									"backdropFilter": "blur(10px)",
									"boxShadow":
										index === 0
											? "0 4px 12px rgba(46, 125, 50, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
											: "0 2px 8px rgba(46, 125, 50, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
									"transition": "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
									"&:hover": {
										background:
											"linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
										color: "white",
										transform: "translateY(-2px) scale(1.05)",
										boxShadow:
											"0 6px 16px rgba(46, 125, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
										borderColor: "rgba(255, 255, 255, 0.4)",
									},
								}}
							/>
						))}
					</Box>
				</Box>

				{/* Featured Post */}
				<Box sx={{ py: 6 }}>
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
						Featured Article
					</Typography>
					<Card
						sx={{
							"p": 4,
							"boxShadow": "0 8px 24px rgba(0,0,0,0.15)",
							"transition": "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
							"position": "relative",
							"overflow": "hidden",
							"cursor": "pointer",
							"background": "linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
							"border": "1px solid rgba(46, 125, 50, 0.1)",
							"borderRadius": "12px",
							"&::before": {
								content: '""',
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								height: "3px",
								background: "linear-gradient(90deg, #2E7D32, #66BB6A, #2E7D32)",
								transform: "scaleX(0)",
								transformOrigin: "left",
								transition: "transform 0.4s ease",
							},
							"&:hover": {
								transform: "translateY(-12px)",
								boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
							},
							"&:hover::before": {
								transform: "scaleX(1)",
							},
						}}>
						<CardContent sx={{ p: 0 }}>
							<Box
								sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
								<Chip
									label={featuredPost.category}
									sx={{
										backgroundColor: "#E8F5E8",
										color: "#2E7D32",
										fontWeight: 600,
									}}
								/>
								<Typography variant="body2" color="text.secondary">
									{featuredPost.readTime}
								</Typography>
							</Box>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "2rem",
									fontWeight: 600,
									color: "#2C3E50",
									mb: 3,
									lineHeight: 1.3,
								}}>
								{featuredPost.title}
							</Typography>
							<Typography
								variant="body1"
								color="text.secondary"
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}>
								{featuredPost.excerpt}
							</Typography>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexWrap: "wrap",
									gap: 2,
								}}>
								<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
									<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
										<Person sx={{ fontSize: "1rem", color: "#5D6D7E" }} />
										<Typography variant="body2" color="text.secondary">
											{featuredPost.author}
										</Typography>
									</Box>
									<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
										<CalendarToday
											sx={{ fontSize: "1rem", color: "#5D6D7E" }}
										/>
										<Typography variant="body2" color="text.secondary">
											January 15, 2024
										</Typography>
									</Box>
								</Box>
								<Button
									variant="contained"
									endIcon={<ArrowForward />}
									component={Link}
									href={`/blog/${featuredPost.slug}`}
									sx={{
										"background":
											"linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
										"borderRadius": "12px",
										"px": 3,
										"py": 1.5,
										"fontWeight": 600,
										"border": "1px solid rgba(255, 255, 255, 0.2)",
										"boxShadow":
											"0 4px 16px rgba(46, 125, 50, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
										"backdropFilter": "blur(10px)",
										"color": "#ffffff",
										"transition":
											"all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
										"&:hover": {
											background:
												"linear-gradient(135deg, #1B5E20 0%, #0D4E12 100%)",
											transform: "translateY(-2px) scale(1.02)",
											boxShadow:
												"0 6px 20px rgba(46, 125, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
										},
									}}>
									Read Full Article
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Box>

				{/* Recent Posts */}
				<Box sx={{ py: 6 }}>
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
						Recent Articles
					</Typography>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								md: "repeat(2, 1fr)",
								lg: "repeat(3, 1fr)",
							},
							gap: 4,
						}}>
						{blogPosts.map((post, index) => (
							<Card
								key={index}
								sx={{
									"height": "100%",
									"display": "flex",
									"flexDirection": "column",
									"transition": "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
									"position": "relative",
									"overflow": "hidden",
									"cursor": "pointer",
									"background":
										"linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
									"&::before": {
										content: '""',
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										height: "3px",
										background:
											"linear-gradient(90deg, #2E7D32, #66BB6A, #2E7D32)",
										transform: "scaleX(0)",
										transformOrigin: "left",
										transition: "transform 0.4s ease",
									},
									"&:hover": {
										transform: "translateY(-8px) scale(1.02)",
										boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
									},
									"&:hover::before": {
										transform: "scaleX(1)",
									},
									"&:hover .blog-category": {
										transform: "scale(1.1)",
										backgroundColor: "#E8F5E8",
										color: "#2E7D32",
									},
								}}>
								<CardContent
									sx={{
										p: 3,
										flex: 1,
										display: "flex",
										flexDirection: "column",
									}}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 2,
											mb: 2,
										}}>
										<Chip
											className="blog-category"
											label={post.category}
											size="small"
											sx={{
												backgroundColor: "#F0F9FF",
												color: "#0EA5E9",
												fontSize: "0.75rem",
												transition: "all 0.3s ease",
											}}
										/>
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{ fontSize: "0.75rem" }}>
											{post.readTime}
										</Typography>
									</Box>
									<Typography
										variant="h4"
										component="h4"
										sx={{
											fontSize: "1.1rem",
											fontWeight: 600,
											color: "#2C3E50",
											mb: 2,
											lineHeight: 1.4,
											flex: 0,
										}}>
										{post.title}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ mb: 3, lineHeight: 1.5, flex: 1 }}>
										{post.excerpt}
									</Typography>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											gap: 2,
										}}>
										<Box>
											<Typography
												variant="body2"
												sx={{
													fontWeight: 600,
													color: "#2E7D32",
													fontSize: "0.8rem",
												}}>
												{post.author}
											</Typography>
											<Typography
												variant="body2"
												color="text.secondary"
												sx={{ fontSize: "0.75rem" }}>
												{post.dateFormatted}
											</Typography>
										</Box>
										<Button
											size="small"
											component={Link}
											href={`/blog/${post.slug}`}
											sx={{
												"color": "#2E7D32",
												"&:hover": { backgroundColor: "#E8F5E8" },
											}}>
											Read More
										</Button>
									</Box>
								</CardContent>
							</Card>
						))}
					</Box>
				</Box>

				{/* Newsletter Signup */}
				<Box sx={{ py: 8 }}>
					<Card
						sx={{
							"p": 6,
							"textAlign": "center",
							"backgroundColor": "#E8F5E8",
							"border": "1px solid #2E7D32",
							"background":
								"linear-gradient(135deg, #E8F5E8 0%, #F1F8E9 50%, #E8F5E8 100%)",
							"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
									"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
								transition: "left 0.6s ease",
							},
							"&:hover": {
								transform: "scale(1.02)",
								boxShadow: "0 15px 30px rgba(46, 125, 50, 0.15)",
							},
							"&:hover::before": {
								left: "100%",
							},
						}}>
						<CardContent sx={{ p: 0 }}>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.8rem",
									fontWeight: 600,
									color: "#2C3E50",
									mb: 2,
								}}>
								Stay Updated with Industry Insights
							</Typography>
							<Typography
								variant="body1"
								color="text.secondary"
								sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}>
								Subscribe to our newsletter and receive the latest healthcare
								technology trends, regulatory updates and expert insights
								delivered to your inbox.
							</Typography>
							<Button
								variant="contained"
								size="large"
								sx={{
									"background":
										"linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
									"px": 4,
									"py": 1.5,
									"fontSize": "1.1rem",
									"borderRadius": "16px",
									"fontWeight": 600,
									"border": "1px solid rgba(255, 255, 255, 0.2)",
									"boxShadow":
										"0 6px 20px rgba(46, 125, 50, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
									"backdropFilter": "blur(10px)",
									"color": "#ffffff",
									"transition": "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
									"position": "relative",
									"overflow": "hidden",
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
										borderRadius: "16px",
										pointerEvents: "none",
									},
									"&:hover": {
										background:
											"linear-gradient(135deg, #1B5E20 0%, #0D4E12 100%)",
										transform: "translateY(-2px) scale(1.02)",
										boxShadow:
											"0 8px 28px rgba(46, 125, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
									},
									"&:hover::after": {
										opacity: 1,
									},
								}}>
								Subscribe to Newsletter
							</Button>
						</CardContent>
					</Card>
				</Box>
			</Container>
		</>
	);
}
