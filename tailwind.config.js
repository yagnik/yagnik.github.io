module.exports = {
  safelist: ['pl-0', 'pl-2', 'pl-4', 'pl-6', 'pl-8', 'pl-10'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#F6F5F1',
        },
        text: {
          primary: '#353534',
          secondary: '#4A4A46',
          highlight: '#1380a8',
        },
      },

      typography: ({ theme }) => ({
        custom: {
          css: {
            '--tw-prose-body': theme('colors.text.primary'),
            '--tw-prose-headings': theme('colors.text.secondary'),
            '--tw-prose-lead': theme('colors.text.secondary'),
            '--tw-prose-links': theme('colors.text.highlight'),
            '--tw-prose-bold': theme('colors.text.secondary'),
            '--tw-prose-counters': theme('colors.text.secondary'),
            '--tw-prose-bullets': theme('colors.text.secondary'),
            '--tw-prose-hr': theme('colors.text.secondary'),
            '--tw-prose-quotes': theme('colors.text.secondary'),
            '--tw-prose-quote-borders': theme('colors.text.secondary'),
            '--tw-prose-captions': theme('colors.text.secondary'),
            '--tw-prose-code': theme('colors.text.secondary'),
            '--tw-prose-pre-code': theme('colors.text.secondary'),
            '--tw-prose-pre-bg': theme('colors.text.secondary'),
            '--tw-prose-th-borders': theme('colors.text.secondary'),
            '--tw-prose-td-borders': theme('colors.text.secondary'),
            '--tw-prose-invert-body': theme('colors.text.primary'),
            '--tw-prose-invert-headings': theme('colors.text.secondary'),
            '--tw-prose-invert-lead': theme('colors.text.secondary'),
            '--tw-prose-invert-links': theme('colors.text.secondary'),
            '--tw-prose-invert-bold': theme('colors.text.secondary'),
            '--tw-prose-invert-counters': theme('colors.text.secondary'),
            '--tw-prose-invert-bullets': theme('colors.text.secondary'),
            '--tw-prose-invert-hr': theme('colors.text.secondary'),
            '--tw-prose-invert-quotes': theme('colors.text.secondary'),
            '--tw-prose-invert-quote-borders': theme('colors.text.secondary'),
            '--tw-prose-invert-captions': theme('colors.text.secondary'),
            '--tw-prose-invert-code': theme('colors.text.secondary'),
            '--tw-prose-invert-pre-code': theme('colors.text.secondary'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.text.secondary'),
            '--tw-prose-invert-td-borders': theme('colors.text.secondary'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
