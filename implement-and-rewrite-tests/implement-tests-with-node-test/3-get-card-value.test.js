import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Ace returns 11", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Face cards return 10", () => {
  assert.equal(getCardValue("J♣"), 10);
  assert.equal(getCardValue("Q♦"), 10);
  assert.equal(getCardValue("K♥"), 10);
})

test("Number cards 2 to 10 return their numbers", () => {
  for(let n = 2; n <= 10; n++) {
    assert.equal(getCardValue(`${n}♦`), n);
  }
});

test("Only valid double-digit '10' card", () => {
  assert.equal(getCardValue("10♥"), 10);
});

test("Accepts all four suits", () => {
  for (const suit of ["♠", "♥", "♦", "♣"]){
  assert.equal(getCardValue(`5${suit}`), 5);
  }
});

test("Arbitrary non-card string", () => {
  assert.throws(() => getCardValue("invalid"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
});

// TODO: What other invalid card cases can you think of?
test("Missing suit", () => {
  assert.equal(getCardValue("7"), /Expected a number followed by a suit/);
  assert.equal(getCardValue("A"), /Expected a number followed by a result/);
});

test("Missing ranks", () => {
  assert.equal(() => getCardValue("♥"), /Expected a number followed by a suit/);
})