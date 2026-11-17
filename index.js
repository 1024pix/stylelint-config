const propertiesOrder = require('./properties-order');

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': [propertiesOrder],
    'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'color-no-hex': [
      true,
      {
        message: (hex) =>
          `Hex colors like "${hex}" should be replaced by Design Tokens. https://ui.pix.fr/`,
      },
    ],
    'color-named': [
      'never',
      {
        message:
          'Named colors like "white" should be replaced by Design Tokens. https://ui.pix.fr/',
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      { ignore: ['after-comment', 'first-nested'] },
    ],
    'value-keyword-case': ['lower', { ignoreKeywords: ['Arial'] }],
    'selector-class-pattern': null,
  },
};
