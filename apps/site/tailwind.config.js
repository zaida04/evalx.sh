module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
    './src/util/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)']
      }
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        luxury: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/colors/themes")["[data-theme=luxury]"],
        },
      },
    ],
  },
}
