module.exports = {
  mode: "jit",
  purge: { enabled: true, content: ["./src/**/*.{html,ts}"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        wide: ".15em",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
