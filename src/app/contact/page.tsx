import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { Phone, Email, LocationOn, BusinessCenter } from "@mui/icons-material";
import { generatePageMetadata, generateOrganizationSchema } from "@/lib/seo";
import SEOScript from "@/components/SEOScript";
import ContactForm from "@/components/ContactForm";

export const metadata = generatePageMetadata("contact");

export default function ContactPage() {
	const schemas = [generateOrganizationSchema()];

	const contactMethods = [
		{
			icon: <Phone sx={{ fontSize: "2rem", color: "#2E7D32" }} />,
			title: "Phone",
			primary: "+1 (555) 123-4567",
			secondary: "Monday - Friday, 9AM - 6PM EST",
			description: "Speak directly with our support team",
		},
		{
			icon: <Email sx={{ fontSize: "2rem", color: "#2E7D32" }} />,
			title: "Email",
			primary: "contact@floriantechnologies.com",
			secondary: "support@floriantechnologies.com",
			description: "Get detailed responses within 24 hours",
		},
		{
			icon: <LocationOn sx={{ fontSize: "2rem", color: "#2E7D32" }} />,
			title: "Address",
			primary: "123 Innovation Drive",
			secondary: "Boston, MA 02115, USA",
			description: "Visit our headquarters and innovation center",
		},
		{
			icon: <BusinessCenter sx={{ fontSize: "2rem", color: "#2E7D32" }} />,
			title: "Business Hours",
			primary: "Monday - Friday: 9AM - 6PM EST",
			secondary: "Emergency Support: 24/7",
			description: "We&apos;re here when you need us",
		},
	];

	const departments = [
		{
			name: "Sales & Business Development",
			email: "sales@floriantechnologies.com",
			description: "Product inquiries, quotes and partnership opportunities",
		},
		{
			name: "Technical Support",
			email: "support@floriantechnologies.com",
			description: "Product support, troubleshooting and technical assistance",
		},
		{
			name: "Consulting Services",
			email: "consulting@floriantechnologies.com",
			description: "IT consulting, custom development and project discussions",
		},
		{
			name: "Regulatory & Compliance",
			email: "compliance@floriantechnologies.com",
			description:
				"FDA regulations, HIPAA compliance and certification questions",
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
							src="/images/get_in_touch.png"
							alt="Contact Florian Technologies"
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
						Contact Florian Technologies
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
						Ready to partner with us? Get in touch for quotes, consultations, or
						support
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
						Contact Florian Technologies
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
						Ready to partner with us? Get in touch for quotes, consultations, or
						support
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
						Get in Touch Today • Free Consultation Available
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
						Transform your healthcare technology or get expert IT consulting.
						Our team is here to help you achieve your goals.
					</Typography>
				</Box>

				{/* Contact Methods Section */}
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
						How to Reach Us
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							gap: 4,
							mb: 8,
						}}>
						{contactMethods.map((method, index) => (
							<Card key={index} sx={{ flex: 1, p: 3, textAlign: "center" }}>
								<CardContent sx={{ p: 0 }}>
									<Box sx={{ mb: 2 }}>{method.icon}</Box>
									<Typography
										variant="h3"
										component="h3"
										sx={{
											fontSize: "1.3rem",
											fontWeight: 600,
											color: "#2C3E50",
											mb: 2,
										}}>
										{method.title}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											fontWeight: 600,
											color: "#2E7D32",
											mb: 1,
											wordBreak: "break-all",
											overflowWrap: "break-word",
											lineHeight: 1.4,
										}}>
										{method.primary}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{
											mb: 2,
											wordBreak: "break-all",
											overflowWrap: "break-word",
											lineHeight: 1.4,
										}}>
										{method.secondary}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{method.description}
									</Typography>
								</CardContent>
							</Card>
						))}
					</Box>
				</Box>

				{/* Contact Form Section */}
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
						Send Us a Message
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", lg: "row" },
							gap: 6,
						}}>
						{/* Contact Form */}
						<ContactForm />

						{/* Department Contacts */}
						<Box sx={{ flex: 1 }}>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.5rem",
									fontWeight: 600,
									color: "#2C3E50",
									mb: 3,
								}}>
								Department Contacts
							</Typography>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
								{departments.map((dept, index) => (
									<Card key={index} sx={{ p: 3 }}>
										<CardContent sx={{ p: 0 }}>
											<Typography
												variant="h4"
												component="h4"
												sx={{
													fontSize: "1.1rem",
													fontWeight: 600,
													color: "#2E7D32",
													mb: 1,
												}}>
												{dept.name}
											</Typography>
											<Typography
												variant="body2"
												sx={{
													color: "#2C3E50",
													fontWeight: 600,
													mb: 1,
													wordBreak: "break-all",
													overflowWrap: "break-word",
													lineHeight: 1.4,
												}}>
												{dept.email}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{dept.description}
											</Typography>
										</CardContent>
									</Card>
								))}
							</Box>
						</Box>
					</Box>
				</Box>

				{/* Emergency Contact Section */}
				<Box sx={{ py: 6 }}>
					<Card
						sx={{
							p: 4,
							textAlign: "center",
							backgroundColor: "#E8F5E8",
							border: "1px solid #2E7D32",
						}}>
						<CardContent sx={{ p: 0 }}>
							<Typography
								variant="h3"
								component="h3"
								sx={{
									fontSize: "1.5rem",
									fontWeight: 600,
									color: "#2C3E50",
									mb: 2,
								}}>
								Emergency Support
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
								For critical system issues or urgent technical support outside
								business hours
							</Typography>
							<Typography
								variant="h4"
								component="h4"
								sx={{
									fontSize: "1.3rem",
									fontWeight: 600,
									color: "#2E7D32",
									mb: 1,
								}}>
								24/7 Emergency Hotline
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1.2rem",
									fontWeight: 600,
									color: "#2C3E50",
								}}>
								+1 (555) 999-HELP (4357)
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</Container>
		</>
	);
}
