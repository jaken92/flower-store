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
      },
      fontFamily: {
        customReg: ['PlayfairDisplay-Regular', 'sans'],
        customSemiBold: ['PlayfairDisplay-SemiBold', 'sans'],
        customMedium: ['PlayfairDisplay-Medium', 'sans'],
      },
    },
  },
};
