/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './src/components/**/*.{html,js}'],
  theme: {
    extend: {},
    spacing: {
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      20: '80px',
      22: '88px',
      23: '92px',
      24: '96px',
      25: '100px',
      30: '120px',
      36: '132px',
      40: '160px',
      48: '192px',
      56: '224px',
      64: '256px'
    },
    fontSize: {
      xs: '1.2rem',
      sm: '1.5rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem'
    },
    screens: {
      md: { max: '767px' },
      sp: { max: '1000px' }
    }
  },
  plugins: []
};
