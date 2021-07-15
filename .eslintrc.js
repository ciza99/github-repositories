module.exports = {
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
  },
  ignorePatterns: [".eslintrc.js"],
};
