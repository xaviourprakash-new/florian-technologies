import {
	Container,
	Typography,
	Box,
	Card,
	CardContent,
	Chip,
} from "@mui/material";
import Image from "next/image";
import { generatePageMetadata, generateProductSchema } from "@/lib/seo";
import SEOScript from "@/components/SEOScript";

export const metadata = generatePageMetadata("products");

export default function ProductsPage() {
	const productSchemas = [
		generateProductSchema({
			name: "Hospital Diagnostic System HD-Pro",
			description:
				"Advanced diagnostic imaging and analysis system for hospital environments",
			category: "Medical Equipment",
			image: "/images/hd-pro.jpg",
		}),
		generateProductSchema({
			name: "Pharmacy Automation Suite PAS-360",
			description: "Complete pharmacy management and automation solution",
			category: "Pharmacy Software",
			image: "/images/pas-360.jpg",
		}),
		generateProductSchema({
			name: "Patient Management Platform PMP-Elite",
			description:
				"Comprehensive patient data management and workflow optimization",
			category: "Healthcare Software",
			image: "/images/pmp-elite.jpg",
		}),
	];

	const products = [
		{
			name: "Hospital Diagnostic System HD-Pro",
			category: "Medical Equipment",
			description:
				"Advanced diagnostic imaging and analysis system designed for hospital environments. Features real-time processing, AI-powered analysis and seamless integration with existing hospital information systems.",
			features: [
				"Real-time Processing",
				"AI-Powered Analysis",
				"DICOM Compatible",
				"Cloud Integration",
				"FDA Approved",
			],
			applications: [
				"Radiology Departments",
				"Emergency Rooms",
				"Specialized Clinics",
			],
		},
		{
			name: "Pharmacy Automation Suite PAS-360",
			category: "Pharmacy Software",
			description:
				"Complete pharmacy management solution that automates dispensing, inventory management and regulatory compliance. Reduces errors and improves efficiency in both hospital and retail pharmacy settings.",
			features: [
				"Automated Dispensing",
				"Inventory Management",
				"Regulatory Compliance",
				"Error Reduction",
				"Multi-Location Support",
			],
			applications: [
				"Hospital Pharmacies",
				"Retail Pharmacies",
				"Specialty Pharmacies",
			],
		},
		{
			name: "Patient Management Platform PMP-Elite",
			category: "Healthcare Software",
			description:
				"Comprehensive patient data management system that streamlines workflows, enhances care coordination and ensures HIPAA compliance. Built for modern healthcare facilities of all sizes.",
			features: [
				"Electronic Health Records",
				"Workflow Optimization",
				"HIPAA Compliant",
				"Mobile Access",
				"Analytics Dashboard",
			],
			applications: ["Hospitals", "Clinics", "Healthcare Networks"],
		},
		{
			name: "Telemedicine Platform TeleHealth-Connect",
			category: "Digital Health",
			description:
				"Secure telemedicine solution enabling remote consultations, patient monitoring and digital health services. Designed for healthcare providers transitioning to digital care delivery.",
			features: [
				"Video Consultations",
				"Remote Monitoring",
				"Secure Messaging",
				"Appointment Scheduling",
				"Multi-Device Support",
			],
			applications: [
				"Primary Care",
				"Specialist Consultations",
				"Remote Monitoring",
			],
		},
		{
			name: "Laboratory Information System LIS-Advanced",
			category: "Laboratory Technology",
			description:
				"Comprehensive laboratory management system that handles sample tracking, test results, quality control and regulatory reporting for clinical laboratories.",
			features: [
				"Sample Tracking",
				"Results Management",
				"Quality Control",
				"Regulatory Reporting",
				"Integration Ready",
			],
			applications: ["Clinical Labs", "Pathology Labs", "Research Facilities"],
		},
		{
			name: "Medical Device Integration Hub MDI-Central",
			category: "Integration Solutions",
			description:
				"Universal integration platform that connects various medical devices to hospital networks, enabling seamless data flow and centralized monitoring.",
			features: [
				"Device Connectivity",
				"Data Standardization",
				"Real-time Monitoring",
				"Alert Management",
				"Scalable Architecture",
			],
			applications: ["ICU Units", "Operating Rooms", "Patient Wards"],
		},
	];

	return (
		<>
			<SEOScript schemas={productSchemas} />

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
							src="/images/healthcare_products.png"
							alt="Medical Products and Healthcare Solutions"
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
							src="/images/healthcare_products.png"
							alt="Medical Products and Healthcare Solutions"
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
							Healthcare Products
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
							Innovative medical technology solutions designed to enhance
							patient care, streamline clinical workflows, and improve
							healthcare outcomes across all medical specialties.
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
						Healthcare Products
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
						Innovative medical technology solutions designed to enhance patient
						care, streamline clinical workflows, and improve healthcare outcomes
						across all medical specialties.
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
						FDA Approved • CE Certified • HIPAA Compliant
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
						Discover our comprehensive range of medical products designed with
						precision, safety, and compliance at the forefront.
					</Typography>
				</Box>

				{/* Products Section */}
				<Box sx={{ py: 4 }}>
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
						Our Product Portfolio
					</Typography>

					<Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
						{products.map((product, index) => (
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
											flexDirection: { xs: "column", md: "row" },
											gap: 4,
										}}>
										<Box sx={{ flex: 1 }}>
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
													{product.name}
												</Typography>
												<Chip
													label={product.category}
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
												{product.description}
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
												Key Features
											</Typography>
											<Box
												sx={{
													display: "flex",
													flexWrap: "wrap",
													gap: 1,
													mb: 3,
												}}>
												{product.features.map((feature, idx) => (
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

										<Box sx={{ minWidth: { md: "300px" } }}>
											<Typography
												variant="h4"
												component="h4"
												sx={{
													fontSize: "1.1rem",
													fontWeight: 600,
													color: "#2E7D32",
													mb: 2,
												}}>
												Applications
											</Typography>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													gap: 1,
												}}>
												{product.applications.map((application, idx) => (
													<Box
														key={idx}
														sx={{
															backgroundColor: "#F8F9FA",
															p: 2,
															borderRadius: 1,
															border: "1px solid #E9ECEF",
														}}>
														<Typography variant="body2" color="text.secondary">
															{application}
														</Typography>
													</Box>
												))}
											</Box>
										</Box>
									</Box>
								</CardContent>
							</Card>
						))}
					</Box>
				</Box>

				{/* Compliance Section */}
				<Box sx={{ py: 8, textAlign: "center" }}>
					<Typography
						variant="h2"
						component="h2"
						sx={{
							fontSize: { xs: "1.8rem", md: "2.2rem" },
							fontWeight: 600,
							color: "#2C3E50",
							mb: 4,
						}}>
						Industry Compliance & Certifications
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							gap: 4,
							justifyContent: "center",
						}}>
						<Card
							sx={{
								"p": 3,
								"minWidth": "200px",
								"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								"background":
									"linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
								"cursor": "pointer",
								"&:hover": {
									transform: "translateY(-8px) scale(1.05)",
									boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
								},
								"&:hover .compliance-icon": {
									transform: "scale(1.2) rotate(10deg)",
								},
							}}>
							<Box
								className="compliance-icon"
								sx={{
									width: 48,
									height: 48,
									margin: "0 auto 16px",
									backgroundColor: "#E8F5E8",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									fontSize: "1.5rem",
								}}>
								🏥
							</Box>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.2rem",
									fontWeight: 600,
									color: "#2E7D32",
									mb: 1,
								}}>
								FDA Approved
							</Typography>
							<Typography variant="body2" color="text.secondary">
								All medical devices meet FDA safety and efficacy standards
							</Typography>
						</Card>
						<Card
							sx={{
								"p": 3,
								"minWidth": "200px",
								"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								"background":
									"linear-gradient(135deg, #ffffff 0%, #fffcf8 100%)",
								"cursor": "pointer",
								"&:hover": {
									transform: "translateY(-8px) scale(1.05)",
									boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
								},
								"&:hover .compliance-icon": {
									transform: "scale(1.2) rotate(-10deg)",
								},
							}}>
							<Box
								className="compliance-icon"
								sx={{
									width: 48,
									height: 48,
									margin: "0 auto 16px",
									backgroundColor: "#FFF3E0",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									fontSize: "1.5rem",
								}}>
								🇪🇺
							</Box>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.2rem",
									fontWeight: 600,
									color: "#FF8F00",
									mb: 1,
								}}>
								CE Certified
							</Typography>
							<Typography variant="body2" color="text.secondary">
								European conformity marking for medical device safety
							</Typography>
						</Card>
						<Card
							sx={{
								"p": 3,
								"minWidth": "200px",
								"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								"background":
									"linear-gradient(135deg, #ffffff 0%, #f8f8ff 100%)",
								"cursor": "pointer",
								"&:hover": {
									transform: "translateY(-8px) scale(1.05)",
									boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
								},
								"&:hover .compliance-icon": {
									transform: "scale(1.2) rotate(15deg)",
								},
							}}>
							<Box
								className="compliance-icon"
								sx={{
									width: 48,
									height: 48,
									margin: "0 auto 16px",
									backgroundColor: "#F3E5F5",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									fontSize: "1.5rem",
								}}>
								🔒
							</Box>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.2rem",
									fontWeight: 600,
									color: "#2E7D32",
									mb: 1,
								}}>
								HIPAA Compliant
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Complete patient data privacy and security compliance
							</Typography>
						</Card>
					</Box>
				</Box>
			</Container>
		</>
	);
}
