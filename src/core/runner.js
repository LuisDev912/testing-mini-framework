import { getTests } from "./test.js";

// the runner function must run each of the tests' function using a try/catch statement
export async function runner() {
    const tests = getTests();

    for (const test of tests) {
        return test;
    };
};

