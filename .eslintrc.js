module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'prettier-standard', 'plugin:vue-a11y/base'],
  plugins: ['vue-a11y'],
  // add your custom rules here
  rules: {
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }]
  },
}
