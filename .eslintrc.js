module.exports = {
  root: true,
  globals: {
    serverConfig: false
  },
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    //"max-len": ["error", { code: 200, tabWidth: 2 }], //字符串最大长度
    "vue/max-attributes-per-line": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/html-indent": 0,
    "vue/require-default-prop": 0,
    "vue/no-unused-vars": 0,
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/require-prop-types": 0,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-eq-null": 2,
    "no-ex-assign": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-multi-spaces": 1,
    "no-multiple-empty-lines": [1, { max: 2 }],
    "no-redeclare": 2,
    "no-trailing-spaces": 2,
    "no-unused-vars": 0,
    "no-undef": 0,
    "array-bracket-spacing": [2, "never"],
    camelcase: 2,
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, "last"],
    eqeqeq: [2, "allow-null"],
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, "always"],
    "semi-spacing": [
      2,
      {
        before: false,
        after: true
      }
    ]
  }
};
