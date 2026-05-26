/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        premium: '0 20px 60px rgba(0, 0, 0, 0.18)',
      },
      colors: {
        emerald: {
          950: '#0e382f',
          900: '#145447',
          800: '#146756',
          700: '#1f805f',
        },
        finance: {
          50: '#f9f4eb',
          100: '#f3e9dd',
          200: '#e7d7c8',
        },
        cream: {
          DEFAULT: '#f7f1e6',
          light: '#fbf7f0',
        },
        gold: {
          DEFAULT: '#d4af73',
          light: '#e9c98f',
        },
      },
      backgroundImage: {
        'finance-gradient': 'radial-gradient(circle at top, rgba(212, 175, 115, 0.15), transparent 35%), linear-gradient(180deg, #f8f4ea 0%, #efe9dc 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
