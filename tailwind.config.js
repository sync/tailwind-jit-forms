module.exports = {
  mode: 'jit',
  purge: ["./src/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
