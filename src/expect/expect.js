import { toBe, toEqual } from './matchers.js';

export function expect(received) {
    return {
        toBe(expected) {
            toBe(received, expected);
        },

        toEqual(expected) {
            toEqual(received, expected);
        }
    };
}
