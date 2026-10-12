/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Theme-aware tokens (values live in src/index.css and flip with the .dark class)
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          alt: 'rgb(var(--surface-alt) / <alpha-value>)',
          soft: 'rgb(var(--surface-soft) / <alpha-value>)',
          wash: 'rgb(var(--surface-wash) / <alpha-value>)',
          wash2: 'rgb(var(--surface-wash2) / <alpha-value>)',
        },
        midnight: {
          50: 'rgb(var(--m-50) / <alpha-value>)',
          100: 'rgb(var(--m-100) / <alpha-value>)',
          200: 'rgb(var(--m-200) / <alpha-value>)',
          300: 'rgb(var(--m-300) / <alpha-value>)',
          400: 'rgb(var(--m-400) / <alpha-value>)',
          500: 'rgb(var(--m-500) / <alpha-value>)',
          600: 'rgb(var(--m-600) / <alpha-value>)',
          700: 'rgb(var(--m-700) / <alpha-value>)',
          800: 'rgb(var(--m-800) / <alpha-value>)',
          900: 'rgb(var(--m-900) / <alpha-value>)',
        },
        electric: {
          50: 'rgb(var(--e-50) / <alpha-value>)',
          100: 'rgb(var(--e-100) / <alpha-value>)',
          200: 'rgb(var(--e-200) / <alpha-value>)',
          300: '#6bd8ff',
          400: '#22c5ff',
          500: '#06a5ed',
          600: 'rgb(var(--e-600) / <alpha-value>)',
          700: 'rgb(var(--e-700) / <alpha-value>)',
          800: '#0b5a86',
          900: '#104c6e',
        },
        accent: {
          50: 'rgb(var(--a-50) / <alpha-value>)',
          100: '#d0f0e0',
          200: '#a3e0c4',
          300: '#6bcaa0',
          400: '#34af7c',
          500: '#159a5e',
          600: 'rgb(var(--a-600) / <alpha-value>)',
          700: '#0a633e',
          800: '#0a4f33',
          900: '#09412b',
        },
        // Fixed (never flips): used for the footer and other always-dark surfaces
        navy: {
          100: '#d4ddee',
          200: '#a9bcdd',
          300: '#7e9ccc',
          800: '#15263d',
          900: '#0c1828',
          950: '#070f1a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
