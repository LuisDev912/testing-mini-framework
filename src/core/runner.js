import { getRootTests } from "./test.js";

async function runTests(tests, results) {
    for (const test of tests) {
        await runSingleTest(test, results);
    };
};

async function runSingleTest(test, results) {
    console.time('test-duration');
    try {
        await test.fn();
        console.log(`\u2714 ${test.description}`);
        results.passed++;
    } catch (e) {
        console.log(`\u0058 ${test.description}`);
        console.error(e.message);
        results.failed++;
    };
    console.timeEnd('test-duration');
}

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

    async function runSuite(suite) {
        if (suite.description !== 'root') {
            console.group(`\n→ ${suite.description}`);
        }

        for (const test of suite.tests) {
            try {
                await test.fn();
                console.log(`✔ ${test.description}`);
                passTests++;
            } catch (e) {
                console.log(`✖ ${test.description}`);
                console.error(e.message);
                failedTests++;
            }
        }

        for (const childSuite of suite.suites) {
            await runSuite(childSuite);
        }

        if (suite.description !== 'root') {
            console.groupEnd();
        }
    }

    await runSuite(allTests);

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