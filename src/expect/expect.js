import { toBe, toEqual, toThrow, toReject } from './matchers.js';

export function expect(received) {
    return {
        toBe(expected) {
            const pass = toBe(received, expected);

            if (!pass) {
                throw new Error(`Expected ${received} to be ${expected}`);
            }
        },

        toEqual(expected) {
            const pass = toEqual(received, expected);

            if (!pass) {
                throw new Error(`Expected ${received} to be ${expected}`);
            }
        },

        toThrow() {
            const pass = toThrow(received);

            if (!pass) {
                throw new Error(`Expected function to throw`);
            }
        },

        async toReject() {
            const pass = toReject(received);

            if (!pass) {
                throw new Error(`Expected function to throw`);
            }
        }
    };
};