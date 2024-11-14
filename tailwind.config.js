/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Escanea todos los archivos .html y .ts en la carpeta src
  ],
  theme: {
    extend: {
      screens: {
        smartphone: "316px", // Dispositivos pequeños, como teléfonos
        tablet: "768px", // Tablets
        laptopx: "1024px", // Laptops grandes o pantallas promedio
        desktop: "1280px", // Pantallas de escritorio grandes
      },
    },
  },
  plugins: [],
};
