import tailwindPlugins from '@suwon-web-front/ui-tailwind';

const config = {
  /**
   * @name Purge
   * @see https://tailwindcss.com/docs/content-configuration
   */
  content: [
    './node_modules/@seolhun/ui/dist/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],

  darkMode: 'selector',

  plugins: [...tailwindPlugins],

  theme: {
    extend: {
      rotate: {
        '195': '195deg',
        '210': '210deg',
        '225': '225deg',
        '240': '240deg',
        '255': '255deg',
        '270': '270deg',
        '285': '285deg',
        '300': '300deg',
        '315': '315deg',
        '330': '330deg',
        '345': '345deg',
        '360': '360deg',
      },
    },
  },
};

export default config;
