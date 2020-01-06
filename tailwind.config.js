const defaultTheme = require('tailwindcss/defaultTheme')
const variables = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
    		spacing: {
    			'2px': '2px',
    			'7': '1.75.rem',
    			'9': '2.25rem',
    			'80': '20rem'
    		},
    		maxWidth: {
    			'screen-sm': defaultTheme.screens.sm,
    			'screen-md': defaultTheme.screens.md,
    			'screen-lg': defaultTheme.screens.lg,
    			'screen-xl': defaultTheme.screens.xl
    		},
            colors: {
                primary: '#1569E0',
                primaryHover: '#105CC4',
                primaryHoverDark: '#1053B1'
            }
        },
        transitionProperty: {
          'none': 'none',
          'all': 'all',
          'color': 'color',
          'bg': 'background-color',
          'border': 'border-color',
          'colors': ['color', 'background-color', 'border-color'],
          'opacity': 'opacity',
          'transform': 'transform',
        },
        transitionDuration: {
          'default': '250ms',
          '0': '0ms',
          '100': '100ms',
          '250': '250ms',
          '500': '500ms',
          '750': '750ms',
          '1000': '1000ms',
        },
        transitionTimingFunction: {
          'default': 'ease',
          'linear': 'linear',
          'ease': 'ease',
          'ease-in': 'ease-in',
          'ease-out': 'ease-out',
          'ease-in-out': 'ease-in-out',
        },
        transitionDelay: {
          'default': '0ms',
          '0': '0ms',
          '100': '100ms',
          '250': '250ms',
          '500': '500ms',
          '750': '750ms',
          '1000': '1000ms',
        },
        willChange: {
          'auto': 'auto',
          'scroll': 'scroll-position',
          'contents': 'contents',
          'opacity': 'opacity',
          'transform': 'transform',
        },
    },
    variants: {
        width: ['hover'],
        transitionProperty: ['responsive'],
        transitionDuration: ['responsive'],
        transitionTimingFunction: ['responsive'],
        transitionDelay: ['responsive'],
        willChange: ['responsive'],
    },
    plugins: [
        require('tailwindcss-transitions')(),
    ]
}