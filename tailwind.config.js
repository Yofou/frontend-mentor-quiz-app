import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      purple: '#A729F5',
      'pure-white': '#FFFFFF',
      'dark-navy': '#313E51',
      'grey-navy': '#626C7F',
      'light-grey': '#F4F6FA',
      'navy': '#3B4D66',
      'light-bluish': '#ABC1E1',
      'green': '#26D782',
      'red': '#EE5454',
    },
    fontFamily: {
      rubik: ["'Rubik Variable'", "sans-serif"]
    }
  },
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.display': {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '9rem',
          lineHeight: '100%',
        },
        '.heading-l': {
          fontFamily: theme('fontFamily.rubik'),
          lineHeight: '100%',
          fontSize: '2.5rem',
          '@screen sm': {
            fontSize: '4rem',
          }
        },
        '.heading-m': {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '2.125rem',
          lineHeight: '100%',
        },
        '.heading-s': {
          fontFamily: theme('fontFamily.rubik'),
          lineHeight: '100%',
          fontSize: '1.125rem',
          '@screen sm': {
            fontSize: '1.75rem',
          }
        },
        '.body-m': {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '1.5rem',
          lineHeight: '150%',
        },
        '.body-s': {
          fontFamily: theme('fontFamily.rubik'),
          lineHeight: '150%',
          fontSize: '0.875rem',
          '@screen sm': {
            fontSize: '1.25rem',
          }
        },

        // shadows
        '.shadow-quiz-category': {
          boxShadow: '0px 16px 40px 0px rgba(143, 160, 193, 0.14)'
        },
        '.shadow-quiz-category-dark': {
          boxShadow: '0px 16px 40px 0px rgba(49, 62, 81, 0.14)'
        },
      })
    })
  ],
}

