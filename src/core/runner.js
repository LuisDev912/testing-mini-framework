import { getRootTests } from "./test.js";

// the runner function must run each of the tests' function using a try/catch statement
export async function runner() {
    const allTests = getRootTests();
    let passTests = 0;
    let failedTests = 0;

    console.time('testsDuration')
    for (const test of allTests.tests) {
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

    for (const suite of allTests.suites) {
        console.time('suite-duration'); 
        console.group(`\n \u2192 ${suite.description}`)
        try {
            await suite.fn();
            console.log(`\u2714 ${suite.description}`);
            passTests++;
        } catch (e) {
            console.log(`\u0058 ${suite.description}`);
            console.error(e.message);
            failedTests++;
        };
        console.timeEnd('suite-duration');
    };

    console.group('\n --- Tests Information ---');
    console.info(`\u0069 tests: ${allTests.tests.length + allTests.suites.length - 1}`);
    // subtract -1 to the final result because it counts "describe()" as a test instead of a group of tests
    console.info(`\u0069 suites: ${allTests.suites.length}`);
    console.info(`\u0069 pass: ${passTests}`);
    console.info(`\u0069 fail: ${failedTests}`)
    console.timeEnd('testsDuration');
    console.groupEnd();
    console.log('\n')
};