module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        "3m": "auto 1fr auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
