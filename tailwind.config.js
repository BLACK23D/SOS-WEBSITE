/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#082C38',
          light: '#0e3d4d',
          dark: '#051b22',
          100: '#e6ebed',
          200: '#b3c5ca',
          300: '#80a0a8',
          400: '#4d7a85',
          500: '#082C38',
          600: '#072733',
          700: '#051d26',
          800: '#04141a',
          900: '#020a0d'
        },
        secondary: {
          DEFAULT: '#C19976',
          light: '#cba788',
          dark: '#b88b64',
          100: '#f7f2ee',
          200: '#e8dbcf',
          300: '#d9c4b1',
          400: '#caad92',
          500: '#C19976',
          600: '#ae8a6a',
          700: '#9b7b5e',
          800: '#886c53',
          900: '#755d47'
        },
        accent: {
          DEFAULT: '#FCD8B4',
          light: '#fde2c3',
          dark: '#fbcea5',
          100: '#fff9f5',
          200: '#fef0e2',
          300: '#fee7cf',
          400: '#fddebc',
          500: '#FCD8B4',
          600: '#fbc28d',
          700: '#faac66',
          800: '#f9963f',
          900: '#f88018'
        }
      },
      backgroundColor: {
        'gradient-primary': 'linear-gradient(135deg, #082C38 0%, #0e3d4d 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #C19976 0%, #cba788 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FCD8B4 0%, #fde2c3 100%)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
