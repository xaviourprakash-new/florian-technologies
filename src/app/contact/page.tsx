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
							src="/images/get_in_touch.png"
							alt="Contact Florian Technologies"
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
							src="/images/get_in_touch.png"
							alt="Contact Florian Technologies"
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
							backgroundColor: "rgba(0, 0, 0, 0.4)",
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
							Get In Touch
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
							Ready to transform your healthcare technology? Let&apos;s discuss
							how our innovative solutions can enhance your organization&apos;s
							capabilities and improve patient outcomes.
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
						Get In Touch
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
						Ready to transform your healthcare technology? Let&apos;s discuss
						how our innovative solutions can enhance your organization&apos;s
						capabilities and improve patient outcomes.
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
