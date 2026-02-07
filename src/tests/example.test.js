import { expect } from '../expect/expect.js';
import { test } from '../core/test.js';
import { runner } from '../core/runner.js';

// --- toBe() test ---
test('The result of 2 + 2 must be 4', () => {
    expect(2 + 2).toBe(4);
    // note: "toBe()" is not imported here as it is a part of "expect()" function
});

// --- toEqual() test ---
const UserConfig = {
    role: 'user',
    id: 2
};

const User = {
    role: 'user',
    id: 2
};

test('must return User information with user role', () => {
    expect(User).toEqual(UserConfig);
});

// --- toThrow() test ---
function sumTwoNumbers(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
        throw new TypeError('Not valid numbers.');
    }

    return a + b;
};

test('sumTwoNumbers must return true when both parameters are numbers', () => {
    expect(() => sumTwoNumbers(2, '2')).toThrow();
});

runner();