import { getRootTests } from "./test.js";

// the runner function must run each of the tests' function using a try/catch statement
export async function runner() {
    const tests = getRootTests();
    let passTests = 0;
    let failedTests = 0;

    console.time('testsDuration')
    for (const test in tests) { // currently, it only returns "test.fn is not a funcion" because it doesn't detect any function
        console.time('test-duration');
        // Use a for...in loop instead of Promise.all() as it runs each test in a parallel way without knowing which test goes first 
        try {
            await test.fn();
            console.log(`\u2714 ${test.description}`);
            passTests++;
        } catch (e) {
            console.log(`\u0058 ${test.description}`);
            console.error(e.message);
            failedTests++;
        };
        console.timeEnd('test-duration');
    };

    console.group('\n --- Tests Information ---');
    console.info(`\u0069 tests: ${tests.length}`);
    console.info(`\u0069 pass: ${passTests}`);
    console.info(`\u0069 fail: ${failedTests}`)
    console.timeEnd('testsDuration');
    console.groupEnd();
    console.log('\n')
};