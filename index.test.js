import { strict as assert } from "node:assert";
import { beforeEach, describe, it } from "node:test";

import stylelint from "stylelint";

import config from "./index.js";

const validCss = `
a {
  --foo: bar;
  all: unset;
  align-content: center;
  margin-block: 1rem;

  &:hover {
    color: blue;
  }

  @container (inline-size: 10em) {
    background-color: red;
  }
}
`;

const invalidCss = `
a {
  align-content: center;
  all: unset;
  margin-block: 1rem;
  color: blue;

  @container (inline-size: 10em) {
    background-color: red;
  }

  a:hover {
    color: red;
  }

  --foo: bar;
}
`;

describe("flags no warnings with valid css", () => {
  let result;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validCss,
      config,
    });
  });

  it("has no errors", () => {
    assert.equal(result.errored, false);
  });

  it("flags no warnings", () => {
    assert.equal(result.results[0].warnings.length, 0);
  });
});

describe("flags warnings with invalid css", () => {
  let result;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it("includes an error", () => {
    assert.equal(result.errored, true);
  });

  it("flags four warnings", () => {
    assert.equal(result.results[0].warnings.length, 4);
  });

  it("has correct warning texts", () => {
    assert.deepEqual(
      result.results[0].warnings.map((warning) => warning.text),
      [
        "Expected rule to come before at-rule (order/order)",
        "Expected custom property to come before rule (order/order)",
        'Expected "all" to come before "align-content" (order/properties-order)',
        'Expected "color" to come before "margin-block" (order/properties-order)',
      ],
    );
  });

  it("has correct severity", () => {
    assert.equal(result.results[0].warnings[0].severity, "error");
  });
});

describe("flags no warnings when extended by package name", () => {
  let result;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validCss,
      config: { extends: "stylelint-config-alphabetical-order" },
    });
  });

  it("has no errors", () => {
    assert.equal(result.errored, false);
  });

  it("flags no warnings", () => {
    assert.equal(result.results[0].warnings.length, 0);
  });
});
