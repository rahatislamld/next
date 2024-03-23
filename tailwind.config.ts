import type { Config } from 'tailwindcss';
import { blackA, violet, mauve } from '@radix-ui/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Slab: ['Roboto Slab', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Krona: ['Krona One', 'sans-serif'], // Add Krona One font
    },
    extend: {
      fontFamily: {
        Krona: ['Krona One', 'sans-serif'],
      },
      colors: {
        primaryColor: '#518581',
        secondaryColor: '#FFB23F',
        black: '#151411',
        textColor: '#AFADB5',
        ...mauve,
        ...violet,
        ...blackA,
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },

      backgroundImage: (theme) => ({
        amraneer: "url('/towers.png')",
      }),
    },
  },
  plugins: [],
};

export default config;
