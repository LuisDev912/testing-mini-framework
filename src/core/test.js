export function test(description, fn) {
    return {
        description,
        fn 
        // Writing "() => fn" will not work here as the fn parameter is already a function
    };
};