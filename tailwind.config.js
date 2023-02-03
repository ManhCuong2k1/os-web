/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: {
                10: '#F4F4F4',
                100: '#181818',
            },
            yellow: {
                100: '#F4B840',
            },
        },
        fontSize: {
            '2xs': ['10px', { lineHeight: '14px' }],
            xs: ['12px', { lineHeight: '18px' }],
            sm: ['13px', { lineHeight: '20px' }],
            base: ['14px', { lineHeight: '22px' }],
            lg: ['16px', { lineHeight: '24px' }],
            xl: ['18px', { lineHeight: '28px' }],
            '2xl': ['21px', { lineHeight: '31.5px' }],
            '3xl': ['25px', { lineHeight: '38px' }],
            '4xl': ['36px', { lineHeight: '54px' }],
            '5xl': ['39px', { lineHeight: '51px' }],
            '6xl': ['46px', { lineHeight: '54px' }],
            '7xl': ['56px', { lineHeight: '64px' }],
        },
        borderRadius: {
            none: '0px',
            sm: '4px',
            DEFAULT: '8px',
            md: '10px',
            lg: '16px',
            xl: '20px',
            full: '9999px',
        },
    },
    plugins: [],
};
