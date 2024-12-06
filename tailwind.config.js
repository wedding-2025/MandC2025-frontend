/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(-10px)', opacity: '1' },
          '30%, 70%': { opacity: '0' },
          '50%': { transform: 'translateY(10px)', opacity: '0.5' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(0.8)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
      },
      animation: {
        bounceCustom: 'bounceCustom 2s infinite ease-in-out',
        beat: 'beat 1s infinite ease-in-out',
      },

      fontFamily: {
        sans: ['', 'sans-serif'],  // TODO: Change the font later
        custom: ['font_1', 'serif'],
        custom2: ['font_2', 'serif'],
        custom3: ['font_3', 'serif'],
        gFont1: ['Cormorant', 'serif']
      },
      gridTemplateColumns: {
        '70-30': '70% 28%'
      }
    },
  },
  plugins: [],
}

/* 
  keyframes: {
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(-10px)', opacity: '1' },
          '30%, 70%': { opacity: '0' },
          '50%': { transform: 'translateY(10px)', opacity: '0.5' },
        },
      },
      animation: {
        bounceCustom: 'bounceCustom 2s infinite ease-in-out',
      },
*/