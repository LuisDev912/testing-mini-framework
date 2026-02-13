export function toBe(currentValue, expectedValue) {
    return currentValue === expectedValue;
};
// example: expect(2 + 2).toBe(4)

export function toEqual(currentValue, expectedValue) {
    return JSON.stringify(currentValue) === JSON.stringify(expectedValue);
};
// example: expect({ name: 'John Doe' }).toEqual({ name: 'John Doe' })

export function toThrow(fn) {
    try {
        fn();
        return false;
    } catch {
        return true
    };
};
// example: expect(() => doSomething()).toThrow();

export async function toReject(fn) {
    try {
        await fn();
        return false;
    } catch {
        return true;
    };
}
// example: await expect(async () => doSomething()).toReject();