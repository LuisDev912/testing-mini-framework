import { toBe, toEqual, toThrow, toReject } from './matchers.js';

export function expect(received) {
    const buildMatchers = (isNegated = false) => {
        return {
            toBe(expected) {
                const pass = toBe(received, expected);

                if (isNegated && pass) {
                    throw new Error(`Expected value not to be ${expected}`);
                };

                if (!isNegated && !pass) {
                    throw new Error(`Expected value to be ${expected}`);
                };
            },

            toEqual(expected) {
                const pass = toEqual(received, expected);

                if (isNegated && pass) {
                    throw new Error(`Expected value not to equal ${expected}`);
                };

                if (!isNegated && !pass) {
                    throw new Error(`Expected value to equal ${expected}`);
                };
            },

            toThrow() {
                const pass = toThrow(received);

                if (isNegated && pass) {
                    throw new Error(`Expected function not to throw`);
                };

                if (!isNegated && !pass) {
                    throw new Error(`Expected function to throw`);
                };
            },

            async toReject() {
                const pass = toReject(received);

                if (isNegated && pass) {
                    throw new Error(`Expected function not to throw`);
                };

                if (!isNegated && !pass) {
                    throw new Error(`Expected function to throw`);
                };
            }
        };
    };
    const matchersObject = buildMatchers(false);

    matchersObject.not = buildMatchers(true);
    
    return matchersObject;
};