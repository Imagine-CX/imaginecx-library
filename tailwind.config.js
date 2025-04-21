/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F7E8DA',
          200: '#F7D6B5',
          300: '#F4AE69',
          400: '#F3901D',
          500: '#EF7700',
        },
        secondary: {
          100: '#F9EACA',
          200: '#F9D88F',
          300: '#FCC751',
          400: '#FDB913',
          500: '#E29C00',
        },
        neutral: {
          100: '#FFFFFF',
          200: '#E5E5E5',
          300: '#898989',
          400: '#383838',
          500: '#000000',
        },
        disable: {
          100: '#CECECE',
          200: '#3F3F3F',
          300: '#999999',
          400: '#EAEAEA',
        },
        error: {
          100: '#d80000',
          200: '#a40000',
        },
        success: {
          100: '#2e7d32',
          200: '#1b491d',
          300: '#3EA843',
        },
        info: '#0288d1',
        warning: '#f3c200',
      },
      fontFamily: {
        imagine: ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
  prefix: 'icx-',
};
