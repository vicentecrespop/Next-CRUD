module.exports = {
  purge: {
    content: [
      "./pages/**/*.{html,js,jsx,ts,tsx}",
      "./components/**/*.{html,js,jsx,ts,tsx}"
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
