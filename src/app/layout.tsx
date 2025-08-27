import type { Metadata } from "next";
import { SEO_DATA } from "@/constants/seo";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
	title: SEO_DATA.title,
	description: SEO_DATA.description,
	openGraph: SEO_DATA.openGraph,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" data-scroll-behavior="smooth">
			<body>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
