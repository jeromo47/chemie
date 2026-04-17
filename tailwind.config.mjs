/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta definitiva Grupo Chemie
        brand: {
          50: '#FFF6EF',
          100: '#FFE6D3',
          200: '#FDC8A2',
          300: '#FAA46A',
          400: '#F38538',
          500: '#EC6707', // PRIMARY
          600: '#C95305',
          700: '#9E4104',
          800: '#7A3205',
          900: '#4F2004',
        },
        ink: '#1D1D1B',
        surface: '#FFFFFF',
        'surface-soft': '#FFF6EF',
        line: '#E8DED6',
        muted: '#6B6B6B',
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
      ringColor: {
        DEFAULT: '#EC6707',
      },
    },
  },
  plugins: [],
};
