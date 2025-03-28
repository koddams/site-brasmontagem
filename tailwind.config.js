module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'section-py': '5rem',
        'section-px': '1.5rem',
      },
      screens: {
        'md': '1270px',
      },
      spacing: {
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        primary: {
          light: '#1F3B73',
          DEFAULT: '#1453A6',
          dark: '#0F3A6D',
        },
        brown: {
          500: '#795548',
        },
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],

  safelist: [
    'bg-red-600',
    'bg-amber-500',
    'bg-emerald-500',
    'bg-indigo-500',
    'bg-purple-400',
    'bg-cyan-400',
    'from-primary-light',
    'to-primary-dark',
  ],
};
