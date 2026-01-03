// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import ecTwoSlash from "expressive-code-twoslash";
import remarkEmoji from 'remark-emoji';

import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      // kanagawa-wave, laserwave, rose-pine
      themes: ['kanagawa-wave', 'solarized-light'],
      defaultProps: { wrap: true },
      themeCssSelector: (theme) => {
        return theme.name === 'solarized-light' ? '.is-light' : '.is-dark';
      },
      styleOverrides: {
        borderRadius: '8px',
        codeFontFamily: 'Fira Code',
        codeFontSize: '15px',
        codeLineHeight: '1.5',
      },
      plugins: [ecTwoSlash()],
    }),
    mdx()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkEmoji],
    syntaxHighlight: false,
  },
});