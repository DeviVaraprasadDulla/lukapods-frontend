/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },

    extend: {
      colors: {
        primary: "#0D47A1",
        secondary: "#29B6F6",
        accent: "#E53935",
        success: "#43A047",
        dark: "#07111F",
        light: "#F8FBFF",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 40px rgba(41,182,246,0.35)",
      },

      backgroundImage: {
        hero: "radial-gradient(circle at top, rgba(41,182,246,0.25), transparent 40%)",
      },
    },
  },
  plugins: [],
};
