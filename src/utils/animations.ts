import { keyframes } from "@mui/system";

// Enhanced animation keyframes for visual appeal
export const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const pulseGlow = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 20px rgba(46, 125, 50, 0);
  }
`;

export const shimmerEffect = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const rotateIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.8);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;

// Enhanced theme constants
export const enhancedTheme = {
	gradients: {
		primary: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
		secondary: "linear-gradient(135deg, #FF8F00 0%, #F57C00 100%)",
		accent: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)",
		blue: "linear-gradient(135deg, #1565C0 0%, #1976D2 100%)",
		success: "linear-gradient(135deg, #388E3C 0%, #2E7D32 100%)",
		heroOverlay:
			"linear-gradient(135deg, rgba(46, 125, 50, 0.9) 0%, rgba(27, 94, 32, 0.95) 100%)",
	},
	shadows: {
		elevated: "0 20px 60px rgba(46, 125, 50, 0.15)",
		hover: "0 30px 80px rgba(46, 125, 50, 0.25)",
		card: "0 8px 40px rgba(0, 0, 0, 0.08)",
		cardHover: "0 16px 60px rgba(0, 0, 0, 0.12)",
	},
	animation: {
		fast: "0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
		medium: "0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
		slow: "1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
	},
};
