/**
 * Validation utilities for forms and data validation
 */

import type { FormField, ContactInfo } from "@/types/common";

export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
	// Remove all non-digit characters for validation
	const cleaned = phone.replace(/\D/g, "");
	// Check if it's 10-15 digits (international format)
	return cleaned.length >= 10 && cleaned.length <= 15;
}

export function validateRequired(
	value: string | number | boolean | null | undefined,
	fieldName: string,
): string | null {
	if (!value || (typeof value === "string" && value.trim().length === 0)) {
		return `${fieldName} is required`;
	}
	return null;
}

export function validateMinLength(
	value: string,
	minLength: number,
	fieldName: string,
): string | null {
	if (value && value.length < minLength) {
		return `${fieldName} must be at least ${minLength} characters`;
	}
	return null;
}

export function validateMaxLength(
	value: string,
	maxLength: number,
	fieldName: string,
): string | null {
	if (value && value.length > maxLength) {
		return `${fieldName} must be no more than ${maxLength} characters`;
	}
	return null;
}

export function validatePattern(
	value: string,
	pattern: RegExp,
	fieldName: string,
	message?: string,
): string | null {
	if (value && !pattern.test(value)) {
		return message || `${fieldName} format is invalid`;
	}
	return null;
}

export function validateField(
	value: string | number | boolean | null | undefined,
	field: FormField,
): string | null {
	const { label, required, validation } = field;

	// Check required
	if (required) {
		const requiredError = validateRequired(value, label);
		if (requiredError) return requiredError;
	}

	// Skip other validations if value is empty and not required
	if (!value || (typeof value === "string" && value.trim().length === 0)) {
		return null;
	}

	if (!validation) return null;

	// Check min length
	if (validation.minLength && typeof value === "string") {
		const minLengthError = validateMinLength(
			value,
			validation.minLength,
			label,
		);
		if (minLengthError) return minLengthError;
	}

	// Check max length
	if (validation.maxLength && typeof value === "string") {
		const maxLengthError = validateMaxLength(
			value,
			validation.maxLength,
			label,
		);
		if (maxLengthError) return maxLengthError;
	}

	// Check pattern
	if (validation.pattern && typeof value === "string") {
		const patternError = validatePattern(value, validation.pattern, label);
		if (patternError) return patternError;
	}

	// Check custom validation
	if (validation.custom && typeof value === "string") {
		const customError = validation.custom(value);
		if (customError) return customError;
	}

	return null;
}

export function validateContactForm(
	data: Partial<ContactInfo>,
): Record<string, string> {
	const errors: Record<string, string> = {};

	// Name validation
	const nameError = validateRequired(data.name, "Name");
	if (nameError) errors.name = nameError;
	else if (data.name && data.name.length < 2) {
		errors.name = "Name must be at least 2 characters";
	}

	// Email validation
	const emailError = validateRequired(data.email, "Email");
	if (emailError) errors.email = emailError;
	else if (data.email && !isValidEmail(data.email)) {
		errors.email = "Please enter a valid email address";
	}

	// Phone validation
	if (data.phone && !isValidPhone(data.phone)) {
		errors.phone = "Please enter a valid phone number";
	}

	// Subject validation
	const subjectError = validateRequired(data.subject, "Subject");
	if (subjectError) errors.subject = subjectError;
	else if (data.subject && data.subject.length < 5) {
		errors.subject = "Subject must be at least 5 characters";
	}

	// Message validation
	const messageError = validateRequired(data.message, "Message");
	if (messageError) errors.message = messageError;
	else if (data.message && data.message.length < 10) {
		errors.message = "Message must be at least 10 characters";
	}

	return errors;
}

export function sanitizeInput(input: string): string {
	return input
		.trim()
		.replace(/[<>]/g, "") // Remove potential HTML tags
		.substring(0, 1000); // Limit length
}

export function sanitizeContactForm(
	data: Partial<ContactInfo>,
): Partial<ContactInfo> {
	return {
		name: data.name ? sanitizeInput(data.name) : undefined,
		email: data.email ? sanitizeInput(data.email.toLowerCase()) : undefined,
		phone: data.phone ? sanitizeInput(data.phone) : undefined,
		subject: data.subject ? sanitizeInput(data.subject) : undefined,
		message: data.message ? sanitizeInput(data.message) : undefined,
	};
}
