export default {
  plugins: ["stylelint-order"],
  rules: {
    "order/order": [["custom-properties", "declarations", "rules", "at-rules"]],
    "order/properties-order": [["all"], { unspecified: "bottomAlphabetical" }],
  },
};
