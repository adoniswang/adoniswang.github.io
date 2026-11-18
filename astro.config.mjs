// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // GitHub Pages 使用者站台，部署在網域根目錄，不需要設定 base
  site: 'https://adoniswang.github.io',
  output: 'static',
  trailingSlash: 'ignore',
});
