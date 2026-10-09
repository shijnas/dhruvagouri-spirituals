/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080807',
        deepWarmBlack: '#11100D',
        darkBrown: '#47331D',
        antiqueGold: '#C69A38',
        primaryGold: '#E5BC5C',
        paleGold: '#F2D78C',
        warmIvory: '#F8F4EA',
        creamBg: '#EFE6D3',
        charcoalText: '#292720',
        mutedTaupe: '#827968',
        lightBorders: '#E4D9C6',
        goldBorder: 'rgba(198, 154, 56, 0.35)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      screens: {
        'ref': '1536px',
      }
    },
  },
  plugins: [],
}
