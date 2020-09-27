//postcss.config.js
const tailwindcss = require('tailwind.css');
module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
