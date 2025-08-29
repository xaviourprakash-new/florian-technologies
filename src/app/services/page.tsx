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
import {
	generatePageMetadata,
	generateServiceSchema,
	generateBreadcrumbSchema,
} from "@/lib/seo";
import SEOScript from "@/components/SEOScript";

export const metadata = generatePageMetadata("services");

export default function ServicesPage() {
	const serviceSchemas = [
		generateServiceSchema({
			name: "IT Consulting & Strategy",
			description:
				"Strategic IT consulting services for organizations across all industries",
			serviceType: "Consulting",
		}),
		generateServiceSchema({
			name: "Custom Software Development",
			description:
				"Tailored software solutions for businesses across multiple domains",
			serviceType: "Development",
		}),
		generateServiceSchema({
			name: "Cloud Infrastructure Solutions",
			description:
				"Secure cloud migration and infrastructure management for all industries",
			serviceType: "Cloud Services",
		}),
		generateBreadcrumbSchema([
			{ name: "Home", url: "https://floriantechnologies.com" },
			{ name: "Services", url: "https://floriantechnologies.com/services" },
		]),
	];

	const services = [
		{
			name: "IT Consulting & Strategy",
			category: "Strategic Consulting",
			description:
				"Comprehensive IT consulting services for businesses across all industries. We help organizations optimize their technology infrastructure, drive digital transformation, and align IT strategy with business objectives.",
			features: [
				"Technology Assessment",
				"Digital Transformation",
				"Strategic Planning",
				"Workflow Optimization",
				"ROI Analysis",
			],
			deliverables: [
				"Technology Roadmap",
				"Implementation Plan",
				"Best Practices Guide",
				"Staff Training",
			],
			industries: [
				"Healthcare",
				"Finance & Banking",
				"E-commerce",
				"Manufacturing",
				"Education",
				"Retail",
			],
		},
		{
			name: "Custom Software Development",
			category: "Development Services",
			description:
				"Bespoke software solutions designed for businesses across multiple domains. From web applications to enterprise systems, we create secure, scalable, and user-friendly applications tailored to your specific needs.",
			features: [
				"Full-Stack Development",
				"Industry Compliance",
				"Scalable Architecture",
				"User-Centric Design",
				"API Integration",
			],
			deliverables: [
				"Custom Applications",
				"Web & Mobile Apps",
				"Documentation",
				"Testing & QA",
			],
			industries: [
				"Technology Startups",
				"Financial Services",
				"E-commerce Platforms",
				"Healthcare Providers",
				"Educational Institutions",
				"Manufacturing",
			],
		},
		{
			name: "Cloud Infrastructure Solutions",
			category: "Cloud Services",
			description:
				"Secure cloud migration and infrastructure management services for organizations across all sectors. We ensure optimal performance, cost efficiency, and scalability in cloud environments.",
			features: [
				"Cloud Migration",
				"Infrastructure Management",
				"Disaster Recovery",
				"Performance Optimization",
				"24/7 Monitoring",
			],
			deliverables: [
				"Cloud Architecture",
				"Migration Strategy",
				"Security Protocols",
				"Monitoring Dashboard",
			],
			industries: [
				"Enterprise Organizations",
				"Growing Businesses",
				"SaaS Companies",
				"Financial Institutions",
				"Government Agencies",
				"Healthcare Systems",
			],
		},
		{
			name: "Data Analytics & Business Intelligence",
			category: "Analytics Services",
			description:
				"Advanced data analytics and business intelligence solutions that transform raw data into actionable insights. Improve decision-making, operational efficiency, and competitive advantage across any industry.",
			features: [
				"Data Visualization",
				"Predictive Analytics",
				"Real-time Reporting",
				"Performance Metrics",
				"Market Intelligence",
			],
			deliverables: [
				"Analytics Platform",
				"Custom Reports",
				"Interactive Dashboards",
				"Training Materials",
			],
			industries: [
				"Retail & E-commerce",
				"Financial Services",
				"Manufacturing",
				"Healthcare",
				"Technology Companies",
				"Government",
			],
		},
		{
			name: "System Integration Services",
			category: "Integration Solutions",
			description:
				"Comprehensive system integration services that connect disparate systems, applications, and platforms for seamless data flow and improved operational efficiency across your organization.",
			features: [
				"API Development",
				"Data Synchronization",
				"Legacy System Integration",
				"Workflow Automation",
				"Third-party Integrations",
			],
			deliverables: [
				"Integration Architecture",
				"API Documentation",
				"Testing Framework",
				"Maintenance Plan",
			],
			industries: [
				"Multi-location Businesses",
				"Enterprise Organizations",
				"SaaS Providers",
				"E-commerce Companies",
				"Financial Services",
				"Healthcare Networks",
			],
		},
		{
			name: "Cybersecurity & Compliance",
			category: "Security Services",
			description:
				"Comprehensive cybersecurity and regulatory compliance services protecting sensitive business data and ensuring adherence to industry standards and regulations across all sectors.",
			features: [
				"Security Assessment",
				"Compliance Auditing",
				"Risk Management",
				"Incident Response",
				"Security Training",
			],
			deliverables: [
				"Security Assessment Report",
				"Compliance Framework",
				"Incident Response Plan",
				"Training Program",
			],
			industries: [
				"Financial Services",
				"Healthcare Organizations",
				"E-commerce Platforms",
				"Government Agencies",
				"Technology Companies",
				"Manufacturing",
			],
		},
	];

	return (
		<>
			<SEOScript schemas={serviceSchemas} />

			{/* Simple Hero Image Section with Responsive Layout */}
			<Box
				sx={{
					position: "relative",
					width: "100%",
					overflow: "hidden",
					mb: 4,
				}}>
				{/* Image Container - Responsive Height */}
				<Box
					sx={{
						position: "relative",
						height: { xs: "400px", sm: "500px", md: "600px", lg: "700px" },
						width: "100%",
					}}>
					{/* Mobile Image - Show actual size */}
					<Box
						sx={{
							display: { xs: "block", md: "none" },
							position: "relative",
							width: "100%",
							height: "100%",
						}}>
						<Image
							src="/images/it_services.png"
							alt="IT Services and Consulting"
							fill
							sizes="(max-width: 768px) 100vw, 0px"
							style={{
								objectFit: "contain",
								objectPosition: "center",
							}}
							priority
						/>
					</Box>

					{/* Desktop Image - Cover for full background */}
					<Box
						sx={{
							display: { xs: "none", md: "block" },
							position: "relative",
							width: "100%",
							height: "100%",
						}}>
						<Image
							src="/images/it_services.png"
							alt="IT Services and Consulting"
							fill
							sizes="(max-width: 767px) 0px, 100vw"
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							priority
						/>
					</Box>

					{/* Simple Overlay for Text Readability */}
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(0, 0, 0, 0.1)",
							zIndex: 1,
						}}
					/>

					{/* Desktop Overlay Content */}
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							zIndex: 2,
							textAlign: "center",
							color: "white",
							px: { xs: 3, md: 6 },
							display: { xs: "none", md: "block" },
							width: "90%",
							maxWidth: "800px",
						}}>
						<Typography
							variant="h1"
							component="h1"
							sx={{
								fontSize: { md: "3.5rem", lg: "4rem", xl: "4.5rem" },
								fontWeight: 700,
								mb: 3,
								textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
								fontFamily: "Poppins, sans-serif",
								color: "white",
							}}>
							IT Services & Consulting
						</Typography>
						<Typography
							variant="h2"
							component="p"
							sx={{
								fontSize: { md: "1.4rem", lg: "1.6rem", xl: "1.8rem" },
								fontWeight: 400,
								maxWidth: "700px",
								mx: "auto",
								lineHeight: 1.6,
								color: "white",
								textShadow: "0 1px 3px rgba(0, 0, 0, 0.7)",
							}}>
							Expert technology services spanning multiple industries including
							healthcare, finance, e-commerce, manufacturing, and emerging
							sectors globally.
						</Typography>
					</Box>
				</Box>

				{/* Mobile Content Below Image */}
				<Box
					sx={{
						display: { xs: "block", md: "none" },
						textAlign: "center",
						py: 4,
						px: 3,
						backgroundColor: "#f8f9fa",
					}}>
					<Typography
						variant="h1"
						component="h1"
						sx={{
							fontSize: "2.2rem",
							fontWeight: 700,
							mb: 2,
							fontFamily: "Poppins, sans-serif",
							color: "#2E7D32",
						}}>
						IT Services & Consulting
					</Typography>
					<Typography
						variant="h2"
						component="p"
						sx={{
							fontSize: "1.1rem",
							fontWeight: 400,
							lineHeight: 1.6,
							color: "#555",
							maxWidth: "500px",
							mx: "auto",
						}}>
						Expert technology services spanning multiple industries including
						healthcare, finance, e-commerce, manufacturing, and emerging sectors
						globally.
					</Typography>
				</Box>
			</Box>

			<Container maxWidth="lg">
				{/* Header Section */}
				<Box
					sx={{
						py: { xs: 8, md: 12 },
						textAlign: "center",
					}}>
					<Typography
						variant="h2"
						component="p"
						sx={{
							fontSize: { xs: "1.1rem", md: "1.3rem" },
							color: "#5D6D7E",
							mb: 2,
							maxWidth: "800px",
							mx: "auto",
							lineHeight: 1.6,
						}}>
						Delivering comprehensive IT solutions to businesses across diverse
						industries worldwide. From startups to enterprises, we provide
						technology expertise that drives growth, efficiency, and innovation.
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: "#2E7D32",
							fontWeight: 600,
							fontSize: "1.1rem",
						}}>
						Multi-Industry • Global Reach • Proven Expertise
					</Typography>
				</Box>

				{/* Services Section */}
				<Box sx={{ py: 8 }}>
					<Typography
						variant="h2"
						component="h2"
						sx={{
							fontSize: { xs: "1.8rem", md: "2.2rem" },
							fontWeight: 600,
							color: "#2C3E50",
							textAlign: "center",
							mb: 6,
						}}>
						Our Service Portfolio
					</Typography>

					<Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
						{services.map((service, index) => (
							<Card
								key={index}
								sx={{
									"p": 4,
									"boxShadow": "0 4px 12px rgba(0,0,0,0.1)",
									"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									"position": "relative",
									"overflow": "hidden",
									"cursor": "pointer",
									"border": "1px solid rgba(46, 125, 50, 0.1)",
									"borderRadius": "12px",
									"background":
										"linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
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
										transition: "transform 0.3s ease",
									},
									"&:hover": {
										transform: "translateY(-8px)",
										boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
									},
									"&:hover::before": {
										transform: "scaleX(1)",
									},
								}}>
								<CardContent sx={{ p: 0 }}>
									<Box
										sx={{
											display: "flex",
											flexDirection: { xs: "column", lg: "row" },
											gap: 4,
										}}>
										<Box sx={{ flex: 2 }}>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													gap: 2,
													mb: 2,
												}}>
												<Typography
													variant="h3"
													component="h3"
													sx={{
														fontSize: "1.5rem",
														fontWeight: 600,
														color: "#2C3E50",
														flex: 1,
													}}>
													{service.name}
												</Typography>
												<Chip
													label={service.category}
													sx={{
														backgroundColor: "#E8F5E8",
														color: "#2E7D32",
														fontWeight: 600,
													}}
												/>
											</Box>
											<Typography
												variant="body1"
												color="text.secondary"
												sx={{ mb: 3, lineHeight: 1.6 }}>
												{service.description}
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
												Service Features
											</Typography>
											<Box
												sx={{
													display: "flex",
													flexWrap: "wrap",
													gap: 1,
													mb: 3,
												}}>
												{service.features.map((feature, idx) => (
													<Chip
														key={idx}
														label={feature}
														variant="outlined"
														size="small"
														sx={{
															borderColor: "#2E7D32",
															color: "#2E7D32",
														}}
													/>
												))}
											</Box>
										</Box>

										<Box sx={{ flex: 1, minWidth: { lg: "300px" } }}>
											<Typography
												variant="h4"
												component="h4"
												sx={{
													fontSize: "1.1rem",
													fontWeight: 600,
													color: "#2E7D32",
													mb: 2,
												}}>
												Key Deliverables
											</Typography>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													gap: 1,
													mb: 3,
												}}>
												{service.deliverables.map((deliverable, idx) => (
													<Box
														key={idx}
														sx={{
															backgroundColor: "#F8F9FA",
															p: 2,
															borderRadius: 1,
															border: "1px solid #E9ECEF",
														}}>
														<Typography variant="body2" color="text.secondary">
															{deliverable}
														</Typography>
													</Box>
												))}
											</Box>

											<Typography
												variant="h4"
												component="h4"
												sx={{
													fontSize: "1.1rem",
													fontWeight: 600,
													color: "#2E7D32",
													mb: 2,
												}}>
												Target Industries
											</Typography>
											<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
												{service.industries.map((industry, idx) => (
													<Chip
														key={idx}
														label={industry}
														size="small"
														sx={{
															backgroundColor: "#FFF3CD",
															color: "#856404",
															border: "1px solid #FFEAA7",
														}}
													/>
												))}
											</Box>
										</Box>
									</Box>
								</CardContent>
							</Card>
						))}
					</Box>
				</Box>

				{/* CTA Section */}
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
						Ready to Transform Your Organization?
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
						Let&apos;s discuss how our expert team can help you achieve your
						technology goals and drive innovation in your industry.
					</Typography>
					<Button
						variant="contained"
						size="large"
						component={Link}
						href="/contact"
						sx={{
							"background": "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
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
								background: "linear-gradient(135deg, #1B5E20 0%, #0D4E12 100%)",
								transform: "translateY(-2px) scale(1.02)",
								boxShadow:
									"0 8px 28px rgba(46, 125, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
							},
							"&:hover::after": {
								opacity: 1,
							},
						}}>
						Get Started Today
					</Button>
				</Box>
			</Container>
		</>
	);
}
