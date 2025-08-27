import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - Florian Technologies",
	description:
		"Privacy Policy for Florian Technologies - Learn how we protect your personal information and data in our medical products and IT services.",
};

export default function PrivacyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
