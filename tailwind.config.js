// tailwind.config.js
module.exports = {
  content: [
    "./*.{js,jsx,ts,tsx}", // ✅ for JS/React files in root
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ in case you later move code into src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
