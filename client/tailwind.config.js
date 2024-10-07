/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#FFFFFF",
        textColor: "#1A1E18",
        accentColor: "#F4F4F4",
        secondaryTextColor: "#6B7280",
        borderColor: "#D1D5DB",
        hoverColor: "#306366",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      container: {
        padding: "1rem",
        screens: {
          // lg: "1124px",
          // xl: "1124px",
          // "2xl": "1440px",
          lg: "1024px",
          xl: "1208px",
          "2xl": "1536px",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeUp: "fadeUp 0.6s ease-in-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
