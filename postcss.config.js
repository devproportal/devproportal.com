// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/base': {},
    '@tailwindcss/components': {},
    '@tailwindcss/utilities': {},
    'autoprefixer': {},
    'cssnano': {
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: false
      }]
    }
  }
}