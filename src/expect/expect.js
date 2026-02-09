import { toBe, toEqual, toThrow, toReject } from './matchers.js';

export function expect(received) {
    return {
        toBe(expected) {
            toBe(received, expected);
        },

        toEqual(expected) {
            toEqual(received, expected);
        },

        toThrow() {
            toThrow(received);
        },

        async toReject() {
            toReject(received)
        }
    };
};