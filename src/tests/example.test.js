import { expect } from '../expect/expect.js';
import { test } from '../core/test.js';
import { runner } from '../core/runner.js';

const firstTest = test('The result of 2 + 2 must be 4', () => {
    expect(2 + 2).toBe(4);
    // note: "toBe()" is not imported here as it is a part of "expect()" function
});

runner(firstTest);