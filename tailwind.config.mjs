/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        charcoal: '#1E293B',
        slate: '#334155',
        'light-gray': '#F8FAFC',
        sky: '#0EA5E9',
        'order-blue': '#2563EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        'reading': '720px',
        'content': '1200px',
      },
    },
  },
  plugins: [],
};
