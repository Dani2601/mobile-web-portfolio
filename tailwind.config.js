/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'], // supports your custom dark theme
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        card: "var(--color-card)",
      },
    },
  },
  plugins: [],
};
