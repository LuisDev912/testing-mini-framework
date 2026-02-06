import { getTests } from "./test.js";

// the runner function must run each of the tests' function using a try/catch statement
export async function runner() {
    const tests = getTests();

    for (const test of tests) {
    // Use a for...of loop instead of Promise.all() as it runs each test in a parallel way without knowing which test goes first 
        try {
            await test.fn();
            console.log(`✔️ ${test.description}`);
        } catch (e){
            console.log(`X ${test.description}`);
            console.error(e.message);
        }
    };
};

