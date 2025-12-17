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
      themes: ['dracula', 'solarized-light'],
      defaultProps: { 
        wrap: true,
      },
      themeCssSelector: (theme) => {
        return theme.name === 'solarized-light' ? '.is-light' : '.is-dark';
      },
      useDarkModeMediaQuery: false,
      styleOverrides: {
        borderRadius: '8px',
        codeFontFamily: 'Fira Code',
        codeFontSize: '15px',
        codeLineHeight: '1.5',
        // Fix for themes missing cursor color in ecTwoSlash
        // @ts-ignore
        'twoSlash.cursorColor': ({ theme }) => {
          if (theme.name === 'dracula') return '#f8f8f2';
          return 'currentColor'; 
        },
      },
      frames: {
        showCopyToClipboardButton: true,
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