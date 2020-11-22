const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  otherLanguages: ['ina'],
  defaultNS: 'common',
  localeSubpaths: {
      ina: 'ina'
  },
  localePath: 'public/static/locales',
})