"use client";

import { useEffect } from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import SEOScript from "../../components/SEOScript";

export default function PrivacyPage() {
	useEffect(() => {
		// Scroll to top after page loads - only in browser environment
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, []);

	return (
		<>
			<SEOScript
				schemas={[
					{
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "Privacy Policy",
						"description":
							"Privacy Policy for Florian Technologies medical products and IT services",
						"provider": {
							"@type": "Organization",
							"name": "Florian Technologies",
							"url": "https://florian-technologies.com",
						},
					},
				]}
			/>
			<Container maxWidth="lg">
				<Box sx={{ py: { xs: 6, md: 8 } }}>
					{/* Header */}
					<Typography
						variant="h1"
						component="h1"
						sx={{
							fontSize: { xs: "2rem", md: "3rem" },
							fontWeight: 700,
							color: "#2C3E50",
							textAlign: "center",
							mb: 2,
						}}>
						Privacy Policy
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							textAlign: "center",
							color: "#5D6D7E",
							mb: 6,
							fontSize: "1.1rem",
						}}>
						Last updated: December 2024
					</Typography>

					{/* Content */}
					<Paper
						elevation={1}
						sx={{ p: { xs: 3, md: 5 }, borderRadius: "16px" }}>
						{/* Introduction */}
						<Typography
							variant="h4"
							component="h2"
							sx={{ mb: 3, color: "#2E7D32", fontWeight: 600 }}>
							Introduction
						</Typography>
						<Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
							At Florian Technologies, we are committed to protecting your
							privacy and ensuring the security of your personal information.
							This Privacy Policy explains how we collect, use, disclose and
							safeguard your information when you visit our website, use our
							medical products, or engage with our IT services and consulting
							solutions.
						</Typography>

						<Divider sx={{ my: 4 }} />

						{/* Information We Collect */}
						<Typography
							variant="h4"
							component="h2"
							sx={{ mb: 3, color: "#2E7D32", fontWeight: 600 }}>
							Information We Collect
						</Typography>

						<Typography
							variant="h5"
							component="h3"
							sx={{ mb: 2, color: "#2C3E50", fontWeight: 600 }}>
							Personal Information
						</Typography>
						<Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
							We may collect personal information that you voluntarily provide
							to us when you:
						</Typography>
						<Box component="ul" sx={{ mb: 3, pl: 3 }}>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Contact us for inquiries about our medical products or IT
								services
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Request quotes or consultations
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Subscribe to our newsletters or updates
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Use our diagnostic devices or pharmacy automation systems
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Engage our IT consulting or software development services
							</Typography>
						</Box>

						<Typography
							variant="h5"
							component="h3"
							sx={{ mb: 2, color: "#2C3E50", fontWeight: 600 }}>
							Healthcare Data
						</Typography>
						<Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
							For our medical products and healthcare IT solutions, we may
							process protected health information (PHI) in accordance with
							HIPAA regulations and other applicable healthcare privacy laws.
							This includes patient data processed through our diagnostic
							devices and patient management tools.
						</Typography>

						<Typography
							variant="h5"
							component="h3"
							sx={{ mb: 2, color: "#2C3E50", fontWeight: 600 }}>
							Technical Information
						</Typography>
						<Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
							We automatically collect certain technical information when you
							visit our website or use our services, including IP addresses,
							browser types, device information and usage patterns to improve
							our services and ensure system security.
						</Typography>

						<Divider sx={{ my: 4 }} />

						{/* How We Use Information */}
						<Typography
							variant="h4"
							component="h2"
							sx={{ mb: 3, color: "#2E7D32", fontWeight: 600 }}>
							How We Use Your Information
						</Typography>
						<Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
							We use the information we collect for the following purposes:
						</Typography>
						<Box component="ul" sx={{ mb: 4, pl: 3 }}>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Providing and maintaining our medical products and IT services
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Processing healthcare data in compliance with HIPAA and medical
								regulations
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Responding to your inquiries and providing customer support
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Improving our products and services through analytics
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Ensuring system security and preventing unauthorized access
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Complying with legal obligations and industry regulations
							</Typography>
						</Box>

						<Divider sx={{ my: 4 }} />

						{/* Data Security */}
						<Typography
							variant="h4"
							component="h2"
							sx={{ mb: 3, color: "#2E7D32", fontWeight: 600 }}>
							Data Security
						</Typography>
						<Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
							We implement appropriate technical and organizational security
							measures to protect your personal information against unauthorized
							access, alteration, disclosure, or destruction. Our security
							measures include:
						</Typography>
						<Box component="ul" sx={{ mb: 4, pl: 3 }}>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								End-to-end encryption for sensitive healthcare data
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								HIPAA-compliant data handling procedures
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Regular security audits and vulnerability assessments
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Access controls and employee training programs
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Secure cloud infrastructure and data backup systems
							</Typography>
						</Box>

						<Divider sx={{ my: 4 }} />

						{/* Data Sharing */}
						<Typography
							variant="h4"
							component="h2"
							sx={{ mb: 3, color: "#2E7D32", fontWeight: 600 }}>
							Information Sharing
						</Typography>
						<Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
							We do not sell, trade, or rent your personal information to third
							parties. We may share your information only in the following
							circumstances:
						</Typography>
						<Box component="ul" sx={{ mb: 4, pl: 3 }}>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								With healthcare providers as necessary for patient care (with
								appropriate authorization)
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								With trusted service providers who assist in our operations
								under strict confidentiality agreements
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								When required by law or to protect our legal rights
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								With your explicit consent
							</Typography>
						</Box>

						<Divider sx={{ my: 4 }} />

						{/* Your Rights */}
						<Typography
							variant="h4"
							component="h2"
							sx={{ mb: 3, color: "#2E7D32", fontWeight: 600 }}>
							Your Rights
						</Typography>
						<Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
							You have the following rights regarding your personal information:
						</Typography>
						<Box component="ul" sx={{ mb: 4, pl: 3 }}>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Access: Request copies of your personal information
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Rectification: Request correction of inaccurate information
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Erasure: Request deletion of your personal information
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Portability: Request transfer of your data to another
								organization
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1 }}>
								Objection: Object to processing of your personal information
							</Typography>
						</Box>

						<Divider sx={{ my: 4 }} />

						{/* Contact Information */}
						<Typography
							variant="h4"
							component="h2"
							sx={{ mb: 3, color: "#2E7D32", fontWeight: 600 }}>
							Contact Us
						</Typography>
						<Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
							If you have any questions about this Privacy Policy or our data
							practices, please contact us:
						</Typography>
						<Box sx={{ mb: 4 }}>
							<Typography variant="body1" sx={{ mb: 2 }}>
								<strong>Florian Technologies</strong>
								<br />
								Email: privacy@florian-technologies.com
								<br />
								Phone: [Contact Number]
								<br />
								Address: [Business Address]
							</Typography>
						</Box>

						<Typography
							variant="body2"
							sx={{ color: "#7F8C8D", fontStyle: "italic" }}>
							This Privacy Policy may be updated from time to time. We will
							notify you of any significant changes by posting the new Privacy
							Policy on this page with an updated &quot;Last updated&quot; date.
						</Typography>
					</Paper>
				</Box>
			</Container>
		</>
	);
}
