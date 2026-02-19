let rootTests = {
    name: 'root',
    tests: [],
    suites: [],
};

export function test(description, fn) {
    rootTests.tests.push({ description, fn });
    // Writing "() => fn" will not work here as the fn parameter is already a function
};

export function getRootTests() {
    return rootTests;
};