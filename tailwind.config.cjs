module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e5e7eb",      // silver-white futuristic base
        secondary: "#f50057",    // neon magenta accent
        accent: "#00ffff",       // electric cyan accent
        background: "#1a1a1a",   // deep dark background
        text: "#000000",         // black text for contrast
        warm: "#ff9800",         // subtle warmth highlight
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
