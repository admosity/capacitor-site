import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import dotenvPlugin from 'rollup-plugin-dotenv';

export const config: Config = {
  taskQueue: 'async',
  devServer: {
    openBrowser: false,
  },
  outputTargets: [
    {
      type: 'www',
      prerenderConfig: './prerender.config.ts',
      buildDir: 'site-new-build',
      baseUrl: 'https://capacitorjs.com/',
      serviceWorker: {
        unregister: true,
      },
    },
  ],
  plugins: [
    sass({
      includePaths: ['ds'],
    }),
    dotenvPlugin(),
  ],
};