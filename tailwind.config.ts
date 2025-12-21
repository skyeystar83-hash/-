import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'primary-white': '#f5f5f5',
                'deep-charcoal': '#1a1a1a',
                'accent-gold': '#c0a068',
                'neutral-gray': '#888888',
                primary: {
                    DEFAULT: "#2d3748", // Dark slate
                    light: "#4a5568",
                },
                accent: {
                    DEFAULT: "#e2e8f0", // Light gray
                    dark: "#cbd5e0",
                }
            },
            fontFamily: {
                sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
