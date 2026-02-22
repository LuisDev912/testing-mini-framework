import { getRootTests } from "./test.js";

async function runTests(tests, results, { parallel }) {
    if (parallel) {
        await Promise.all(
            tests.map(test => runSingleTest(test, results))
        );
    } else {
        for (const test of tests) {
            await runSingleTest(test, results);
        };
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

async function runSuite(suite, results, options) {
    if (suite.description) {
        console.group(`\n \u2192 ${suite.description}`);
    };

    await runTests(suite.tests, results, options);

    for (const childSuite of suite.suites) {
        await runSuite(childSuite, results, options);
    };

    if (suite.description !== 'root') {
        console.groupEnd();
    };
};

export async function runner({ parallel = false } = {}) {
    const allTests = getRootTests();

    const results = {
        passed: 0,
        failed: 0
    };

    console.time('testsDuration');
    await runSuite(allTests, results, { parallel });

    console.group('\n --- Tests Information ---');
    console.info(`\u0069 tests: ${results.passed + results.failed}`);
    // sum the passed and failed tests instead of "allTests.tests.length + allTests.suites.length - 1" because it only returned "allTests.tests.length". With this, we can show the real amount of tests

    console.info(`\u0069 suites: ${allTests.suites.length}`);
    console.info(`\u0069 pass: ${results.passed}`);
    console.info(`\u0069 fail: ${results.failed}`);
    console.timeEnd('testsDuration');
    console.groupEnd();
    console.log('\n');
};