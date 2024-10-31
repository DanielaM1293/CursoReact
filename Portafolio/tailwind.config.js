/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0a192f',
        'light-gray': '#ccd6f6',
        'teal': '#b764ff',
        'dark-purple': '#6b4ca0', // Nuevo color morado
        'coral': '#a46bff',
      },
    },
  },
  plugins: [],
};
