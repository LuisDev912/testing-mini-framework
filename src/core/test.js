let rootTests = {
    name: 'root',
    tests: [],
    suites: [],
};

let currentTest = rootTests;

export function test(description, fn) {
    currentTest.tests.push({ description, fn });
    // Writing "() => fn" will not work here as the fn parameter is already a function
};

export function describe(description, fn) {
    // we use a tree structure to storage multiple suites in rootTests.suites
    const parentSuite = currentTest;

    const newSuite = {
        description,
        tests: [],
        suites: [],
    };
    parentSuite.suites.push(newSuite);

    currentTest = newSuite;

    fn();
    currentTest = parentSuite;
};

export function getRootTests() {
    return rootTests;
};