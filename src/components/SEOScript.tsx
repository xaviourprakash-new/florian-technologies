"use client";

import Script from "next/script";

interface SEOScriptProps {
	schemas: Record<string, unknown>[];
}

export default function SEOScript({ schemas }: SEOScriptProps) {
	return (
		<>
			{schemas.map((schema, index) => (
				<Script
					key={index}
					id={`schema-${index}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schema),
					}}
				/>
			))}
		</>
	);
}
