/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4c956c',       // Verde moderado
        secondary: '#dce1de',     // Gris claro
        tertiary: '#283618',      // Gris medio
        text: '#12130f',          // Gris oscuro para texto
        background: '#dce1de',    // Blanco para fondo
        emphasis: '#81C784',      // Verde suave para énfasis
        charcoal: '#616161',      // Gris charcoal para detalles
        warning: '#c9184a',       // Rosa para advertencias
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
