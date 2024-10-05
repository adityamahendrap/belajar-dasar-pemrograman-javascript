import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function', async (t) => {
  await t.test('adds two positive numbers', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  await t.test('adds a positive and a negative number', () => {
    assert.strictEqual(sum(5, -3), 2);
  });

  await t.test('adds two negative numbers', () => {
    assert.strictEqual(sum(-2, -4), -6);
  });

  await t.test('adds zero to a number', () => {
    assert.strictEqual(sum(10, 0), 10);
  });

  await t.test('adds a number to zero', () => {
    assert.strictEqual(sum(0, 10), 10);
  });
});