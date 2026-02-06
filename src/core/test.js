let tests = [];

export function test(description, fn) {
    tests.push({ description, fn });
    // Writing "() => fn" will not work here as the fn parameter is already a function
};

export function getTests() {
    return tests;
};