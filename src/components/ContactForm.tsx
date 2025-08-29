"use client";

import React, { useState, useEffect } from "react";
import {
	Box,
	Card,
	CardContent,
	TextField,
	Button,
	Typography,
	Alert,
} from "@mui/material";
import { Send } from "@mui/icons-material";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		company: "",
		projectType: "",
		message: "",
	});
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [isClient, setIsClient] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [touched, setTouched] = useState<Record<string, boolean>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// Validation functions
	const validateField = (name: string, value: string) => {
		switch (name) {
			case "firstName":
				return value.trim().length < 2
					? "First name must be at least 2 characters"
					: "";
			case "lastName":
				return value.trim().length < 2
					? "Last name must be at least 2 characters"
					: "";
			case "email":
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				return !emailRegex.test(value)
					? "Please enter a valid email address"
					: "";
			case "projectType":
				return value.trim().length === 0 ? "Please select a project type" : "";
			case "message":
				return value.trim().length < 10
					? "Message must be at least 10 characters"
					: "";
			default:
				return "";
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		Object.keys(formData).forEach((key) => {
			const error = validateField(key, formData[key as keyof typeof formData]);
			if (error) {
				newErrors[key] = error;
			}
		});

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors({ ...errors, [name]: "" });
		}

		// Mark field as touched
		setTouched({ ...touched, [name]: true });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			setTouched({
				firstName: true,
				lastName: true,
				email: true,
				projectType: true,
				message: true,
			});
			return;
		}

		setIsSubmitting(true);
		try {
			// Simulate form submission
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setSubmitStatus("success");
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				company: "",
				projectType: "",
				message: "",
			});
			setTouched({});
			setErrors({});
		} catch {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	// Create styles that work consistently between server and client
	const getTextFieldStyles = () => ({
		"& .MuiOutlinedInput-root": {
			"borderRadius": "12px",
			"backgroundColor": "rgba(255, 255, 255, 0.9)",
			"border": "1px solid rgba(200, 200, 200, 0.3)",
			"& fieldset": {
				borderColor: "rgba(200, 200, 200, 0.3)",
			},
			"&:hover fieldset": {
				borderColor: "rgba(150, 150, 150, 0.5)",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#2E7D32",
				boxShadow: "0 0 0 2px rgba(46, 125, 50, 0.1)",
			},
			// Apply advanced effects only on client side to avoid hydration issues
			...(isClient && {
				backdropFilter: "blur(10px)",
				background:
					"linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 252, 248, 0.8) 100%)",
			}),
		},
		"& .MuiInputLabel-root": {
			"&.Mui-focused": {
				color: "#2E7D32",
			},
		},
		"& .MuiSelect-nativeInput": {
			color: "#2C3E50",
		},
		"& .MuiOutlinedInput-input": {
			color: "#2C3E50",
		},
	});

	const getCardStyles = () => ({
		flex: 2,
		p: 4,
		backgroundColor: "rgba(255, 255, 255, 0.95)",
		border: "1px solid rgba(46, 125, 50, 0.1)",
		borderRadius: "20px",
		boxShadow:
			"0 8px 32px rgba(46, 125, 50, 0.12), 0 4px 16px rgba(46, 125, 50, 0.08)",
		position: "relative",
		overflow: "hidden",
		// Apply advanced effects only on client side
		...(isClient && {
			"background":
				"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 252, 248, 0.9) 100%)",
			"backdropFilter": "blur(20px)",
			"boxShadow":
				"0 8px 32px rgba(46, 125, 50, 0.12), 0 4px 16px rgba(46, 125, 50, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
			"&::before": {
				content: '""',
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				height: "4px",
				background: "linear-gradient(90deg, #2E7D32, #4CAF50, #81C784)",
				borderRadius: "20px 20px 0 0",
			},
		}),
	});

	const getButtonStyles = () => ({
		mt: 2,
		py: 1.5,
		px: 4,
		fontSize: "1rem",
		fontWeight: 600,
		borderRadius: "12px",
		backgroundColor: "#2E7D32",
		color: "white",
		textTransform: "none" as const,
		transition: "all 0.3s ease",
		// Apply advanced effects only on client side
		...(isClient && {
			"background": "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
			"boxShadow":
				"0 4px 16px rgba(46, 125, 50, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
			"&:hover": {
				background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
				boxShadow:
					"0 6px 20px rgba(46, 125, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
				transform: "translateY(-2px)",
			},
			"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
		}),
	});

	// Prevent hydration issues by ensuring consistent rendering
	if (!isClient) {
		return (
			<Card
				sx={{
					flex: 2,
					p: 4,
					backgroundColor: "rgba(255, 255, 255, 0.95)",
					border: "1px solid rgba(46, 125, 50, 0.1)",
					borderRadius: "20px",
					boxShadow: "0 8px 32px rgba(46, 125, 50, 0.12)",
				}}>
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
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							minHeight: 200,
						}}>
						<Typography variant="body1" color="text.secondary">
							Loading contact form...
						</Typography>
					</Box>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card sx={getCardStyles()}>
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
					onSubmit={handleSubmit}
					sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
					{submitStatus === "success" && (
						<Alert severity="success" sx={{ borderRadius: "12px" }}>
							Thank you! Your message has been sent successfully.
						</Alert>
					)}
					{submitStatus === "error" && (
						<Alert severity="error" sx={{ borderRadius: "12px" }}>
							Sorry, there was an error sending your message. Please try again.
						</Alert>
					)}
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
							value={formData.firstName}
							onChange={handleInputChange}
							required
							error={touched.firstName && !!errors.firstName}
							helperText={touched.firstName && errors.firstName}
							variant="outlined"
							sx={getTextFieldStyles()}
						/>
						<TextField
							fullWidth
							label="Last Name"
							name="lastName"
							value={formData.lastName}
							onChange={handleInputChange}
							required
							error={touched.lastName && !!errors.lastName}
							helperText={touched.lastName && errors.lastName}
							variant="outlined"
							sx={getTextFieldStyles()}
						/>
					</Box>
					<TextField
						fullWidth
						label="Email Address"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						error={touched.email && !!errors.email}
						helperText={touched.email && errors.email}
						variant="outlined"
						sx={getTextFieldStyles()}
					/>
					<TextField
						fullWidth
						label="Company Name"
						name="company"
						value={formData.company}
						onChange={handleInputChange}
						variant="outlined"
						sx={getTextFieldStyles()}
					/>
					<TextField
						fullWidth
						label="Project Type"
						name="projectType"
						value={formData.projectType}
						onChange={handleInputChange}
						select
						required
						error={touched.projectType && !!errors.projectType}
						helperText={
							touched.projectType && errors.projectType
								? errors.projectType
								: "Choose the service that best matches your needs"
						}
						// Accessibility attributes for native select
						SelectProps={{
							native: true,
							displayEmpty: true,
							inputProps: {
								"id": "project-type-select",
								"name": "projectType",
								"title": "Select the type of project you need help with",
								"aria-label": "Project Type",
								"aria-describedby": "project-type-helper",
								"role": "combobox",
								"aria-required": "true",
							},
						}}
						variant="outlined"
						sx={getTextFieldStyles()}>
						<option value=""></option>
						<option value="consulting">IT Consulting</option>
						<option value="development">Software Development</option>
						<option value="cloud">Cloud Solutions</option>
						<option value="analytics">Data Analytics</option>
						<option value="integration">System Integration</option>
						<option value="security">Cybersecurity</option>
						<option value="other">Other</option>
					</TextField>
					<TextField
						fullWidth
						label="Message"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						multiline
						rows={9.5}
						required
						error={touched.message && !!errors.message}
						helperText={touched.message && errors.message}
						variant="outlined"
						sx={getTextFieldStyles()}
					/>
					<Button
						type="submit"
						variant="contained"
						disabled={isSubmitting}
						endIcon={<Send />}
						sx={getButtonStyles()}>
						{isSubmitting ? "Sending..." : "Send Message"}
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
