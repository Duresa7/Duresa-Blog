import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://duresakadi.me',
  output: 'static',
  server: { host: true, port: 4322 },
});
