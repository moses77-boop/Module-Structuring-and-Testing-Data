import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(1, 2), true);
  assert.equal(isProperFraction(0, 5), true);
  assert.equal(isProperFraction(0, -5), true);
  assert.equal(isProperFraction(-1, 2), true);
  assert.equal(isProperFraction(1, -2), true);
  assert.equal(isProperFraction(-1, -2), true);
});

test("Basic improper fraction", () => {
  assert.equal(isProperFraction(5, 2), false);
  assert.equal(isProperFraction(3, 3), false);
  assert.equal(isProperFraction(5, 0), false);
  assert.equal(isProperFraction(-5, 2), false);
  assert.equal(isProperFraction(5, -2), false);
  assert.equal(isProperFraction(-5, -2), false);
});
