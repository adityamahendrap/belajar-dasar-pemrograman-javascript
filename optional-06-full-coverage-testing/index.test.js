import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum function", async (t) => {
  await t.test("adds two positive numbers", () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  await t.test("adds positive number and zero", () => {
    assert.strictEqual(sum(5, 0), 5);
    assert.strictEqual(sum(0, 5), 5);
  });

  await t.test("adds two zeros", () => {
    assert.strictEqual(sum(0, 0), 0);
  });

  await t.test("returns 0 when one number is negative", () => {
    assert.strictEqual(sum(-1, 5), 0);
    assert.strictEqual(sum(5, -1), 0);
  });

  await t.test("returns 0 when both numbers are negative", () => {
    assert.strictEqual(sum(-1, -1), 0);
  });

  await t.test("returns 0 for string inputs", () => {
    assert.strictEqual(sum("2", "3"), 0);
    assert.strictEqual(sum(2, "3"), 0);
    assert.strictEqual(sum("2", 3), 0);
  });

  await t.test("returns 0 for boolean inputs", () => {
    assert.strictEqual(sum(true, false), 0);
    assert.strictEqual(sum(2, true), 0);
  });

  await t.test("returns 0 for null inputs", () => {
    assert.strictEqual(sum(null, null), 0);
    assert.strictEqual(sum(2, null), 0);
    assert.strictEqual(sum(null, 2), 0);
  });

  await t.test("returns 0 for undefined inputs", () => {
    assert.strictEqual(sum(undefined, undefined), 0);
    assert.strictEqual(sum(2, undefined), 0);
    assert.strictEqual(sum(undefined, 2), 0);
  });

  await t.test("returns 0 for object inputs", () => {
    assert.strictEqual(sum({}, {}), 0);
    assert.strictEqual(sum(2, {}), 0);
  });

  await t.test("returns 0 for array inputs", () => {
    assert.strictEqual(sum([], []), 0);
    assert.strictEqual(sum(2, []), 0);
  });

  await t.test("handles Infinity", () => {
    assert.strictEqual(sum(Infinity, Infinity), Infinity);
    assert.strictEqual(sum(5, Infinity), Infinity);
  });

  await t.test("adds floating point numbers", () => {
    assert.strictEqual(sum(0.1, 0.2), 0.30000000000000004); // JavaScript floating point precision
  });

  await t.test("returns 0 for missing arguments", () => {
    assert.strictEqual(sum(), 0);
    assert.strictEqual(sum(5), 0);
  });
});
