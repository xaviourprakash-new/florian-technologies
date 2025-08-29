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
} from "../../lib/seo";
import SEOScript from "../../components/SEOScript";

export const metadata = generatePageMetadata("services");

export default function ServicesPage() {
	const serviceSchemas = [
		generateServiceSchema({
			name: "Healthcare IT Consulting",
			description:
				"Strategic IT consulting services for healthcare organizations",
			serviceType: "Consulting",
		}),
		generateServiceSchema({
			name: "Custom Software Development",
			description:
				"Tailored software solutions for medical and healthcare applications",
			serviceType: "Development",
		}),
		generateServiceSchema({
			name: "Cloud Infrastructure Solutions",
			description:
				"Secure cloud migration and infrastructure management for healthcare",
			serviceType: "Cloud Services",
		}),
		generateBreadcrumbSchema([
			{ name: "Home", url: "https://floriantechnologies.com" },
			{ name: "Services", url: "https://floriantechnologies.com/services" },
		]),
	];

	const services = [
		{
			name: "Healthcare IT Consulting",
			category: "Strategic Consulting",
			description:
				"Expert IT consulting services tailored for healthcare organizations. We help hospitals, clinics and medical facilities optimize their technology infrastructure, ensure regulatory compliance and improve operational efficiency.",
			features: [
				"Technology Assessment",
				"Digital Transformation",
				"Compliance Planning",
				"Workflow Optimization",
				"ROI Analysis",
			],
			deliverables: [
				"Technology Roadmap",
				"Implementation Plan",
				"Compliance Documentation",
				"Staff Training",
			],
			industries: [
				"Hospitals",
				"Clinics",
				"Medical Centers",
				"Healthcare Networks",
			],
		},
		{
			name: "Custom Software Development",
			category: "Development Services",
			description:
				"Bespoke software solutions designed specifically for medical and healthcare applications. From electronic health records to patient management systems, we create secure, scalable and user-friendly applications.",
			features: [
				"Healthcare-Focused Development",
				"HIPAA Compliance",
				"Scalable Architecture",
				"User-Centric Design",
				"Integration Capabilities",
			],
			deliverables: [
				"Custom Applications",
				"API Integration",
				"Documentation",
				"Testing & QA",
			],
			industries: [
				"Healthcare Providers",
				"Medical Startups",
				"Pharmaceutical Companies",
				"Research Institutions",
			],
		},
		{
			name: "Cloud Infrastructure Solutions",
			category: "Cloud Services",
			description:
				"Secure cloud migration and infrastructure management services designed for healthcare organizations. We ensure data security, regulatory compliance and optimal performance in cloud environments.",
			features: [
				"Cloud Migration",
				"Security Management",
				"Disaster Recovery",
				"Performance Optimization",
				"24/7 Monitoring",
			],
			deliverables: [
				"Cloud Architecture",
				"Migration Plan",
				"Security Protocols",
				"Monitoring Dashboard",
			],
			industries: [
				"Healthcare Systems",
				"Medical Practices",
				"Telehealth Providers",
				"Health Insurance",
			],
		},
		{
			name: "Data Analytics & Business Intelligence",
			category: "Analytics Services",
			description:
				"Advanced data analytics and business intelligence solutions that transform healthcare data into actionable insights. Improve patient outcomes, operational efficiency and decision-making processes.",
			features: [
				"Data Visualization",
				"Predictive Analytics",
				"Real-time Reporting",
				"Performance Metrics",
				"Trend Analysis",
			],
			deliverables: [
				"Analytics Platform",
				"Custom Reports",
				"Dashboards",
				"Training Materials",
			],
			industries: [
				"Large Hospitals",
				"Healthcare Networks",
				"Public Health",
				"Medical Research",
			],
		},
		{
			name: "System Integration Services",
			category: "Integration Solutions",
			description:
				"Comprehensive system integration services that connect disparate healthcare systems, medical devices and software applications for seamless data flow and improved interoperability.",
			features: [
				"API Development",
				"Data Mapping",
				"Real-time Synchronization",
				"Legacy System Integration",
				"Workflow Automation",
			],
			deliverables: [
				"Integration Architecture",
				"API Documentation",
				"Testing Suite",
				"Maintenance Plan",
			],
			industries: [
				"Multi-location Clinics",
				"Hospital Networks",
				"Medical Device Companies",
				"Healthcare SaaS",
			],
		},
		{
			name: "Cybersecurity & Compliance",
			category: "Security Services",
			description:
				"Comprehensive cybersecurity and regulatory compliance services protecting sensitive healthcare data and ensuring adherence to industry standards like HIPAA, HITECH and SOC 2.",
			features: [
				"Security Assessment",
				"Compliance Auditing",
				"Risk Management",
				"Incident Response",
				"Employee Training",
			],
			deliverables: [
				"Security Assessment Report",
				"Compliance Framework",
				"Incident Response Plan",
				"Training Program",
			],
			industries: [
				"All Healthcare Organizations",
				"Telehealth Platforms",
				"Medical Software Companies",
				"Health Plans",
			],
		},
	];

	return (
		<>
			<SEOScript schemas={serviceSchemas} />

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
							src="/images/it_services.png"
							alt="IT Services and Consulting"
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
						IT Services & Consulting
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
						Expert technology services spanning healthcare IT, software
						development, cloud solutions and digital transformation across
						multiple industries.
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
						IT Services & Consulting
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
						Expert technology services spanning healthcare IT, software
						development, cloud solutions and digital transformation across
						multiple industries.
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
						Empowering healthcare organizations with innovative technology
						solutions that drive efficiency, enhance patient care, and ensure
						regulatory compliance.
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: "#2E7D32",
							fontWeight: 600,
							fontSize: "1.1rem",
						}}>
						Healthcare-Focused • Multi-Domain Expertise • Proven Results
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
