module.exports = {
  mode: "jit",
  purge: { enabled: true, content: ["./src/**/*.{html,ts}"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        wide: ".15em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
