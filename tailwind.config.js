import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    extend: {
      colors: {
        pink: '#FFF3F2',
        teal: '#E7F9FA',
        white: '#FFFFFF',
        pinkOpacity: 'rgb(255, 243, 242, 0.8)',
      },
      fontFamily: {
        custom: ['Playfair Display'],
        customSemiBold: ['Playfair Display SemiBold'],
        customMedium: ['Playfair Display Medium'],
        customFancy: ['Playpen Sans'],
      },
    },
  },
};
