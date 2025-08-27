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
			{ name: "Home", url: "https://florian-technologies.com" },
			{ name: "Services", url: "https://florian-technologies.com/services" },
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
			<Container maxWidth="lg">
				{/* Header Section */}
				<Box
					sx={{
						py: { xs: 8, md: 12 },
						textAlign: "center",
					}}>
					<Typography
						variant="h1"
						component="h1"
						sx={{
							fontSize: { xs: "2.5rem", md: "3rem" },
							fontWeight: 700,
							color: "#2C3E50",
							mb: 3,
						}}>
						IT Services & Consulting
					</Typography>
					<Typography
						variant="h2"
						component="p"
						sx={{
							fontSize: { xs: "1.1rem", md: "1.3rem" },
							color: "#5D6D7E",
							mb: 2,
							maxWidth: "800px",
							mx: "auto",
						}}>
						Expert technology services spanning healthcare IT, software
						development, cloud solutions and digital transformation across
						multiple industries.
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
									"borderLeft": "4px solid #2E7D32",
									"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									"position": "relative",
									"overflow": "hidden",
									"cursor": "pointer",
									"&::before": {
										content: '""',
										position: "absolute",
										top: 0,
										left: 0,
										width: "4px",
										height: "100%",
										background: "linear-gradient(180deg, #2E7D32, #66BB6A)",
										transition: "width 0.3s ease",
									},
									"&:hover": {
										transform: "translateX(8px)",
										boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
									},
									"&:hover::before": {
										width: "8px",
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
							"backgroundColor": "#2E7D32",
							"px": 4,
							"py": 1.5,
							"fontSize": "1.1rem",
							"&:hover": { backgroundColor: "#1B5E20" },
						}}>
						Get Started Today
					</Button>
				</Box>
			</Container>
		</>
	);
}
