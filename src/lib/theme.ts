import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2E7D32", // Deep forest green
			light: "#66BB6A", // Light green
			dark: "#1B5E20", // Dark green
		},
		secondary: {
			main: "#FF8F00", // Warm amber/orange
			light: "#FFB74D", // Light amber
			dark: "#E65100", // Dark orange
		},
		background: {
			default: "#F8F9FA", // Very light warm white
			paper: "#FFFFFF",
		},
		text: {
			primary: "#2C3E50", // Dark blue-gray for better readability
			secondary: "#5D6D7E",
		},
	},
	typography: {
		fontFamily:
			'"Inter", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontSize: "2.5rem",
			fontWeight: 700,
			color: "#2C3E50",
			fontFamily:
				'"Poppins", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", sans-serif',
			letterSpacing: "-0.02em",
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 600,
			color: "#2C3E50",
			fontFamily:
				'"Poppins", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", sans-serif',
			letterSpacing: "-0.01em",
		},
		h3: {
			fontFamily:
				'"Poppins", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", sans-serif',
			fontWeight: 600,
			letterSpacing: "-0.01em",
		},
		h4: {
			fontFamily:
				'"Poppins", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", sans-serif',
			fontWeight: 600,
			letterSpacing: "-0.005em",
		},
		h5: {
			fontFamily:
				'"Poppins", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", sans-serif',
			fontWeight: 600,
			letterSpacing: "-0.005em",
		},
		h6: {
			fontWeight: 600,
			fontFamily:
				'"Poppins", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", sans-serif',
			letterSpacing: "0em",
		},
		body1: {
			fontFamily:
				'"Inter", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
			lineHeight: 1.7,
		},
		body2: {
			fontFamily:
				'"Inter", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
			lineHeight: 1.6,
		},
		button: {
			fontFamily:
				'"Inter", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 500,
			textTransform: "none",
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#FFFFFF",
					color: "#2C3E50",
					boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					fontWeight: 500,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					"borderRadius": "12px",
					"boxShadow":
						"0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.08)",
					"transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					"cursor": "pointer",
					"border": "1px solid rgba(0, 0, 0, 0.04)",
					"&:hover": {
						transform: "translateY(-4px)",
						boxShadow:
							"0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
						borderColor: "rgba(46, 125, 50, 0.2)",
					},
					"&:active": {
						transform: "translateY(-2px)",
					},
				},
			},
		},
	},
});

export default theme;
