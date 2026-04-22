/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand Bible palette — inherited from Now City
        forest: {
          DEFAULT: '#1F3A34',
          50: '#EEF4F2',
          100: '#D7E3DF',
          200: '#AFC7BF',
          300: '#87AB9F',
          400: '#5F8F7F',
          500: '#3C6C5E',
          600: '#2F5448',
          700: '#1F3A34', // brand primary
          800: '#152823',
          900: '#0B1613',
        },
        stone: {
          DEFAULT: '#6E736E',
          100: '#E4E5E3',
          200: '#C7C9C6',
          300: '#ABAEAA',
          400: '#8A8E89',
          500: '#6E736E', // brand secondary
          600: '#565A56',
          700: '#3F423F',
          800: '#292B29',
          900: '#141514',
        },
        cream: {
          DEFAULT: '#F6F4EE',
          50: '#FBFAF6',
          100: '#F6F4EE', // brand canvas
          200: '#EDE9DC',
          300: '#D9D2BA',
        },
        copper: {
          DEFAULT: '#B87333',
          50: '#FAF1E7',
          100: '#F0D8B8',
          200: '#E1B17F',
          300: '#D08A4E',
          400: '#B87333', // accent
          500: '#945B28',
          600: '#6F441E',
        },
        sage: {
          DEFAULT: '#A6B8A4',
          50: '#F0F4EF',
          100: '#DDE6DC',
          200: '#C2D0C1',
          300: '#A6B8A4', // accent
          400: '#849B82',
          500: '#637E61',
        },
      },
      fontFamily: {
        // Display: serif for headings (Canela isn't self-hostable without license;
        // we ship Playfair Display and Libre Baskerville as fallbacks — all listed in Brand Bible)
        display: [
          'Canela',
          'Playfair Display',
          'Libre Baskerville',
          'Georgia',
          'serif',
        ],
        // Body: Inter per Brand Bible
        sans: [
          'Inter',
          'Helvetica Neue',
          'Source Sans Pro',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        // Display sizes tuned for editorial feel
        'display-xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
};
