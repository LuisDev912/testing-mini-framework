// --- import ---
import test from 'node:test';
import assert from 'node:assert';

// --- code

function sumTwoNumbers(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
        return new Error('Both numbers most be numbers');
    }

    return a + b;
}

console.log(sumTwoNumbers(2, 2))
console.log(sumTwoNumbers(2, '2'))