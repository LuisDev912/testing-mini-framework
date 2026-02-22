import { expect } from '../expect/expect.js';
import { test, describe } from '../core/test.js';
import { runner } from '../core/runner.js';

// --- toBe() test ---
test('(1) The result of 2 + 2 must be 4', () => {
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

test('(2) must return User information with user role', () => {
    expect(User).toEqual(UserConfig);
});

// --- toThrow() test ---
function sumTwoNumbers(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
        throw new TypeError('Not valid numbers.');
    }

    return a + b;
};

test('(3) sumTwoNumbers must throw an error if a parameter is not valid', () => {
    expect(() => sumTwoNumbers(2, '2')).toThrow();
});
// --- toReject() test ---

async function asyncSum(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
        throw new TypeError('Not valid numbers.');
    }

    return a + b;
};

test('(4) asyncSum must throw an error if a parameter is not valid', () => {
    expect(() => asyncSum(2, '2')).toReject();
});

// --- .not() tests ---
test('(5) not.toBe works', () => {
    expect(2 + 2).not.toBe(5);
});

test('(6) not.toThrow works', () => {
    expect(() => sumTwoNumbers(2, 2)).not.toThrow();
});

// --- describe() tests ---
describe('(suite) sum', () => {
    test('(7) The result of 2 + 1 must be 3', () => {
        expect(2 + 1).toBe(3);
    });

    test('(8) The result of 2 + 4 must be 5', () => {
        expect(2 + 3).toBe(5);
    });
});

runner();