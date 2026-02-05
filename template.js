// --- imports ---
import test from 'node:test';
import assert from 'node:assert';

// --- code ---

function sumTwoNumbers(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
        throw new TypeError('Not valid numbers.');
    }

    return a + b;
}

// --- tests ---

test('sumTwoNumbers must return true when both parameters are numbers', () => {
    assert.ok(sumTwoNumbers(2, 2));
});

test('sumTwoNumbers must return the sum of 2 + 2', () => {
    assert.strictEqual(sumTwoNumbers(2, 2), 4);
});

test('sumTwoNumbers must return a type error when a non-integer value is given', () => {
    assert.throws(
        () => sumTwoNumbers(4, '6'),
        {
            name: 'TypeError',
            message: 'Not valid numbers.'
        }
    );
});

// --- other tests ---

function getConfig() {
    return {
        mode: 'production',
        debug: false
    };
};

test('Must return current configuration', () => {
    assert.deepStrictEqual(
        getConfig(),
        { mode: 'production', debug: false }
    );
});