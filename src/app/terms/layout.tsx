import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service - Florian Technologies",
	description:
		"Terms of Service for Florian Technologies - Understand the terms and conditions for using our medical products and IT services.",
};

export default function TermsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
