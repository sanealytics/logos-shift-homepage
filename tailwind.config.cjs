/** @type {import('tailwindcss').Config} */
module.exports = {
    // mode: 'jit',
    // safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [],

    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {},
        container: {
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
        },
    },

    // Make sure you require daisyui AFTER @tailwindcss/typography in tailwind.config.js
    plugins: [require("@tailwindcss/typography"), require("daisyui")],

    // default config: https://daisyui.com/docs/config/
    daisyui: {
        SereneDigital: {
            "primary": "#FFD700",   // Magic Wand Gold
            "secondary": "#00BFFF", // Luminous Code Blue
            "accent": "#9370DB",    // Soft Purple
            "neutral": "#87CEFA",   // Soft Blue
            "base-100": "#6A5ACD",  // Slightly Darker Shade of Purple
            "info": "#4682B4",      // Steel Blue (complementary)
            "success": "#3CB371",   // Medium Sea Green (complementary)
            "warning": "#FFA500",   // Orange (complementary)
            "error": "#DC143C"      // Crimson (for contrast)
        },
        // themes: ["fantasy"]
    }
}
