"use client";

import { useEffect } from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import SEOScript from "../../components/SEOScript";

export default function TermsPage() {
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
						"name": "Terms of Service",
						"description":
							"Terms of Service for Florian Technologies medical products and IT services",
						"provider": {
							"@type": "Organization",
							"name": "Florian Technologies",
							"url": "https://floriantechnologies.com",
						},
					},
				]}
			/>
			<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
				<Paper elevation={2} sx={{ p: 4 }}>
					<Typography
						variant="h2"
						component="h1"
						gutterBottom
						sx={{ color: "primary.main", fontWeight: "bold" }}>
						Terms of Service
					</Typography>

					<Typography variant="body2" sx={{ mb: 4, color: "text.secondary" }}>
						Last updated: January 2025
					</Typography>

					<Typography variant="body1" paragraph>
						Welcome to Florian Technologies. These Terms of Service
						(&quot;Terms&quot;) govern your use of our medical products,
						healthcare IT services and website operated by Florian Technologies
						(&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
						or using our services, you agree to be bound by these Terms.
					</Typography>

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							1. Acceptance of Terms
						</Typography>
						<Typography variant="body1" paragraph>
							By accessing, browsing, or using our services, you acknowledge
							that you have read, understood and agree to be bound by these
							Terms and our Privacy Policy. If you do not agree to these Terms,
							you must not use our services.
						</Typography>
						<Typography variant="body1" paragraph>
							These Terms apply to all users of our services, including
							healthcare professionals, patients, IT administrators and business
							partners.
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							2. Description of Services
						</Typography>
						<Typography variant="body1" paragraph>
							Florian Technologies provides:
						</Typography>
						<Typography component="ul" sx={{ pl: 3 }}>
							<Typography component="li" variant="body1" paragraph>
								Medical devices and healthcare technology products
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								IT consulting and implementation services for healthcare
								organizations
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Software solutions for healthcare data management and analysis
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Technical support and maintenance services
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Cross-domain expertise consulting in healthcare technology
							</Typography>
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							3. User Responsibilities and Eligibility
						</Typography>
						<Typography
							variant="h5"
							component="h3"
							gutterBottom
							sx={{ mt: 3, color: "primary.dark" }}>
							Eligibility
						</Typography>
						<Typography variant="body1" paragraph>
							You must be at least 18 years old and have the legal authority to
							enter into these Terms. Healthcare professionals must be properly
							licensed in their jurisdiction.
						</Typography>

						<Typography
							variant="h5"
							component="h3"
							gutterBottom
							sx={{ mt: 3, color: "primary.dark" }}>
							Account Responsibilities
						</Typography>
						<Typography variant="body1" paragraph>
							You are responsible for:
						</Typography>
						<Typography component="ul" sx={{ pl: 3 }}>
							<Typography component="li" variant="body1" paragraph>
								Maintaining the confidentiality of your account credentials
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								All activities that occur under your account
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Providing accurate and complete information
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Complying with all applicable laws and regulations
							</Typography>
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							4. Healthcare and Medical Device Compliance
						</Typography>
						<Typography
							variant="h5"
							component="h3"
							gutterBottom
							sx={{ mt: 3, color: "primary.dark" }}>
							Medical Device Regulations
						</Typography>
						<Typography variant="body1" paragraph>
							Our medical devices comply with applicable FDA regulations and
							international standards. Users must follow all provided
							instructions and safety guidelines.
						</Typography>

						<Typography
							variant="h5"
							component="h3"
							gutterBottom
							sx={{ mt: 3, color: "primary.dark" }}>
							Professional Use Only
						</Typography>
						<Typography variant="body1" paragraph>
							Many of our products and services are intended for use by
							qualified healthcare professionals only. Unauthorized use may
							result in termination of service and legal action.
						</Typography>

						<Typography
							variant="h5"
							component="h3"
							gutterBottom
							sx={{ mt: 3, color: "primary.dark" }}>
							HIPAA Compliance
						</Typography>
						<Typography variant="body1" paragraph>
							Our services that handle protected health information (PHI) are
							designed to comply with HIPAA requirements. Users must ensure
							their use of our services complies with applicable privacy laws.
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							5. Prohibited Uses
						</Typography>
						<Typography variant="body1" paragraph>
							You may not use our services to:
						</Typography>
						<Typography component="ul" sx={{ pl: 3 }}>
							<Typography component="li" variant="body1" paragraph>
								Violate any applicable laws or regulations
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Infringe upon intellectual property rights
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Transmit malicious code or attempt to gain unauthorized access
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Use our medical devices outside their intended purpose
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Reverse engineer, modify, or redistribute our proprietary
								software
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Interfere with the operation of our services
							</Typography>
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							6. Intellectual Property
						</Typography>
						<Typography variant="body1" paragraph>
							All content, software and materials provided by Florian
							Technologies are protected by intellectual property laws. This
							includes but is not limited to:
						</Typography>
						<Typography component="ul" sx={{ pl: 3 }}>
							<Typography component="li" variant="body1" paragraph>
								Proprietary software and algorithms
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Medical device designs and specifications
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Documentation and user manuals
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Trademarks and service marks
							</Typography>
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							7. Service Availability and Support
						</Typography>
						<Typography
							variant="h5"
							component="h3"
							gutterBottom
							sx={{ mt: 3, color: "primary.dark" }}>
							Service Levels
						</Typography>
						<Typography variant="body1" paragraph>
							We strive to maintain high availability of our services but cannot
							guarantee uninterrupted access. Scheduled maintenance will be
							communicated in advance when possible.
						</Typography>

						<Typography
							variant="h5"
							component="h3"
							gutterBottom
							sx={{ mt: 3, color: "primary.dark" }}>
							Technical Support
						</Typography>
						<Typography variant="body1" paragraph>
							Technical support is provided according to your service agreement.
							Critical healthcare systems receive priority support with 24/7
							availability for emergency issues.
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							8. Data Security and Privacy
						</Typography>
						<Typography variant="body1" paragraph>
							We implement industry-standard security measures to protect your
							data. However, you acknowledge that no system is completely secure
							and you use our services at your own risk.
						</Typography>
						<Typography variant="body1" paragraph>
							For detailed information about how we collect, use and protect
							your data, please review our Privacy Policy, which is incorporated
							into these Terms by reference.
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							9. Limitation of Liability
						</Typography>
						<Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
							IMPORTANT: This section limits our liability to you. Please read
							it carefully.
						</Typography>
						<Typography variant="body1" paragraph>
							TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLORIAN TECHNOLOGIES SHALL
							NOT BE LIABLE FOR:
						</Typography>
						<Typography component="ul" sx={{ pl: 3 }}>
							<Typography component="li" variant="body1" paragraph>
								INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								LOSS OF DATA, REVENUE, OR BUSINESS OPPORTUNITIES
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								DAMAGES RESULTING FROM THIRD-PARTY ACTIONS
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								DAMAGES EXCEEDING THE AMOUNT PAID FOR OUR SERVICES IN THE
								PRECEDING 12 MONTHS
							</Typography>
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							10. Indemnification
						</Typography>
						<Typography variant="body1" paragraph>
							You agree to indemnify and hold harmless Florian Technologies from
							any claims, damages, or expenses arising from your use of our
							services, violation of these Terms, or infringement of any
							third-party rights.
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							11. Termination
						</Typography>
						<Typography variant="body1" paragraph>
							We may terminate or suspend your access to our services
							immediately, without prior notice, for conduct that we believe
							violates these Terms or is harmful to other users or our business.
						</Typography>
						<Typography variant="body1" paragraph>
							Upon termination, your right to use our services ceases
							immediately. Provisions that by their nature should survive
							termination shall survive, including liability limitations and
							dispute resolution.
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							12. Governing Law and Dispute Resolution
						</Typography>
						<Typography variant="body1" paragraph>
							These Terms are governed by the laws of [Your Jurisdiction],
							without regard to conflict of law principles. Any disputes arising
							from these Terms shall be resolved through binding arbitration,
							except for claims related to intellectual property or emergency
							injunctive relief.
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							13. Changes to Terms
						</Typography>
						<Typography variant="body1" paragraph>
							We reserve the right to modify these Terms at any time. Material
							changes will be communicated through our website or direct
							notification. Continued use of our services after changes
							constitutes acceptance of the modified Terms.
						</Typography>
					</Box>

					<Divider sx={{ my: 3 }} />

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="h4"
							component="h2"
							gutterBottom
							sx={{ color: "primary.main" }}>
							14. Contact Information
						</Typography>
						<Typography variant="body1" paragraph>
							If you have questions about these Terms of Service, please contact
							us:
						</Typography>
						<Typography variant="body1" paragraph>
							<strong>Florian Technologies</strong>
							<br />
							Email: legal@floriantechnologies.com
							<br />
							Phone: [Your Phone Number]
							<br />
							Address: [Your Business Address]
						</Typography>
					</Box>

					<Box sx={{ mt: 6, p: 3, bgcolor: "grey.50", borderRadius: 2 }}>
						<Typography
							variant="body2"
							sx={{ color: "text.secondary", textAlign: "center" }}>
							By using Florian Technologies services, you acknowledge that you
							have read, understood and agree to be bound by these Terms of
							Service and our Privacy Policy.
						</Typography>
					</Box>
				</Paper>
			</Container>
		</>
	);
}
