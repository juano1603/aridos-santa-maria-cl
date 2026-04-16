/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange:  '#f59e0b',
          'orange-dark': '#d97706',
          'orange-light': '#fbbf24',
          silver: '#94a3b8',
          'silver-light': '#cbd5e1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
        'gradient-dark':   'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
      },
      boxShadow: {
        'orange-glow': '0 0 30px rgba(245, 158, 11, 0.35)',
        'card':        '0 4px 24px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
