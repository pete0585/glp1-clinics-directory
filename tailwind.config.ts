import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0B6E6E',
          50: '#E6F4F4',
          100: '#C0E3E3',
          200: '#8DCECE',
          300: '#5ABABA',
          400: '#2FA6A6',
          500: '#0B6E6E',
          600: '#095959',
          700: '#074444',
          800: '#042F2F',
          900: '#021A1A',
        },
        amber: {
          DEFAULT: '#E8A838',
          50: '#FEF8EC',
          100: '#FCEECB',
          200: '#F9DD99',
          300: '#F5CC67',
          400: '#F2BB38',
          500: '#E8A838',
          600: '#C98B1E',
          700: '#9C6C17',
          800: '#6E4D10',
          900: '#402D09',
        },
        charcoal: '#2C2C2C',
        offwhite: '#F7FAFA',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #E6F4F4 0%, #F7FAFA 60%, #FEF8EC 100%)',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(11, 110, 110, 0.08)',
        card: '0 4px 16px rgba(11, 110, 110, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
