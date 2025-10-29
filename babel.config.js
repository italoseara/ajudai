// babel.config.js
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-flow",
    "@babel/preset-typescript",
    "module:@react-native/babel-preset"
  ],
  plugins: [
    "react-refresh/babel",
    "react-native-reanimated/plugin",
    ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
  ],
};
