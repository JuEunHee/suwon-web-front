import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

import { rootSystemColors } from './color.tokens';

export const colorPlugins: any = plugin(function () {}, {
  theme: {
    extend: {
      // @see https://tailwindcss.com/docs/customizing-colors
      colors: {
        ...colors,
        ...rootSystemColors,
        inherit: 'inherit',
        transparent: 'transparent',
      },
    },
  },
});
