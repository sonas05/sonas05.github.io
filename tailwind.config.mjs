/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: '#080808',
        cream: '#f0ece3',
        red: '#FF3B2F',
        'border-dark': '#1e1e1e',
        'border-cream': '#ccc7bc',
      },
      backgroundImage: {
        'dots-dark': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        'dots-light': 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '28px 28px',
      },
    },
  },
  plugins: [],
};
