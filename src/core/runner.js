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
};

async function runSuite(suite, results) {
    if (suite.description !== 'root') {
        console.group(`\n \u2192 ${suite.description}`);
    }

    await runTests(suite.tests, results);

    for (const childSuite of suite.suites) {
        await runSuite(childSuite, results);
    }

    if (suite.description !== 'root') {
        console.groupEnd();
    }
}

export async function runner() {
    const allTests = getRootTests();

    const results = {
        passed: 0,
        failed: 0
    };

    console.time('testsDuration')
    await runSuite(allTests, results);

    console.group('\n --- Tests Information ---');
    console.info(`\u0069 tests: ${allTests.tests.length + allTests.suites.length - 1}`);
    // subtract -1 to the final result because it counts "describe()" as a test instead of a group of tests
    console.info(`\u0069 suites: ${allTests.suites.length}`);
    console.info(`\u0069 pass: ${results.passed}`);
    console.info(`\u0069 fail: ${results.failed}`)
    console.timeEnd('testsDuration');
    console.groupEnd();
    console.log('\n')
};