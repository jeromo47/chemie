/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Verde corporativo provisional. Ajusta todos los tonos cuando llegue el hex final del logo.
        brand: {
          50: '#edf5ee',
          100: '#d0e4d4',
          200: '#a3c9ac',
          300: '#72ac81',
          400: '#4e9461',
          500: '#327c47',
          600: '#256438',
          700: '#1f5330',
          800: '#1b5e20',
          900: '#0f3a18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
};
