import { getTests } from "./test.js";

// the runner function must run each of the tests' function using a try/catch statement
export async function runner() {
    const tests = getTests();
    let passTests = 0;
    let failedTests = 0;

    console.time('testsDuration')
    for (const test of tests) {
        // Use a for...of loop instead of Promise.all() as it runs each test in a parallel way without knowing which test goes first 
        try {
            await test.fn();
            console.log(`${'✔️'.padEnd(3)} ${test.description}`);
            passTests++;
        } catch (e) {
            console.log(`❌ ${test.description}`);
            console.error(e.message);
            failedTests++;
        };
    };
    console.group('Tests information');
    console.info(`tests: ${tests.length}`);
    console.info(`pass: ${passTests}`);
    console.info(`fail: ${failedTests}`)
    console.timeEnd('testsDuration');
    console.groupEnd();
};