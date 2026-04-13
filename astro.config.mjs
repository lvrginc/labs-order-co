import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lvrginc.github.io',
  base: '/labs-order-co',
  integrations: [tailwind()],
  output: 'static',
});
