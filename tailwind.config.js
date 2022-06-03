module.exports = {
  mode:"jit",
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#f1f5f9",
        "primary-extra-dark": "#0f172a",
        "primary-dark": "#1e293b",
        primary: {
          400:  "#16a34a",
          600:"#15803d"
        },
      },

    },
  },
  plugins: [],
}