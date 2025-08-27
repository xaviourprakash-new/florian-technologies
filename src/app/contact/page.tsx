import {
	Container,
	Typography,
	Box,
	Card,
	CardContent,
	Button,
	TextField,
} from "@mui/material";
import { Phone, Email, LocationOn, BusinessCenter } from "@mui/icons-material";
import {
	generatePageMetadata,
	generateOrganizationSchema,
} from "../../lib/seo";
import SEOScript from "../../components/SEOScript";

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
			primary: "contact@florian-technologies.com",
			secondary: "support@florian-technologies.com",
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
			email: "sales@florian-technologies.com",
			description: "Product inquiries, quotes and partnership opportunities",
		},
		{
			name: "Technical Support",
			email: "support@florian-technologies.com",
			description: "Product support, troubleshooting and technical assistance",
		},
		{
			name: "Consulting Services",
			email: "consulting@florian-technologies.com",
			description: "IT consulting, custom development and project discussions",
		},
		{
			name: "Regulatory & Compliance",
			email: "compliance@florian-technologies.com",
			description:
				"FDA regulations, HIPAA compliance and certification questions",
		},
	];

	return (
		<>
			<SEOScript schemas={schemas} />
			<Container maxWidth="lg">
				{/* Header Section */}
				<Box
					sx={{
						py: { xs: 6, md: 8 },
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
						Contact Florian Technologies
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
						Ready to transform your healthcare technology or need expert IT
						consulting? Our team is here to help you achieve your goals.
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: "#2E7D32",
							fontWeight: 600,
							fontSize: "1.1rem",
						}}>
						Get in Touch Today • Free Consultation Available
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
										}}>
										{method.primary}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ mb: 2 }}>
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
						<Card sx={{ flex: 2, p: 4 }}>
							<CardContent sx={{ p: 0 }}>
								<Typography
									variant="h3"
									component="h3"
									sx={{
										fontSize: "1.5rem",
										fontWeight: 600,
										color: "#2C3E50",
										mb: 3,
									}}>
									Get in Touch
								</Typography>
								<Box
									component="form"
									sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
									<Box
										sx={{
											display: "flex",
											flexDirection: { xs: "column", md: "row" },
											gap: 2,
										}}>
										<TextField
											fullWidth
											label="First Name"
											name="firstName"
											required
											variant="outlined"
										/>
										<TextField
											fullWidth
											label="Last Name"
											name="lastName"
											required
											variant="outlined"
										/>
									</Box>
									<TextField
										fullWidth
										label="Email Address"
										name="email"
										type="email"
										required
										variant="outlined"
									/>
									<TextField
										fullWidth
										label="Company Name"
										name="company"
										variant="outlined"
									/>
									<TextField
										fullWidth
										label="Phone Number"
										name="phone"
										variant="outlined"
									/>
									<TextField
										fullWidth
										label="Subject"
										name="subject"
										required
										variant="outlined"
									/>
									<TextField
										fullWidth
										label="Message"
										name="message"
										required
										multiline
										rows={4}
										variant="outlined"
										placeholder="Tell us about your project, requirements, or questions..."
									/>
									<Button
										type="submit"
										variant="contained"
										size="large"
										sx={{
											"backgroundColor": "#2E7D32",
											"py": 1.5,
											"fontSize": "1.1rem",
											"&:hover": { backgroundColor: "#1B5E20" },
										}}>
										Send Message
									</Button>
								</Box>
							</CardContent>
						</Card>

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
