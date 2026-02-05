export function toBe(currentValue, expectedValue) {
    if (currentValue !== expectedValue) {
        throw new Error(
            `expected ${expectedValue} to be ${currentValue}`
        );
    };
};
// example: expect(2 + 2).toBe(4)

export function toEqual(currentValue, expectedValue) {
    const currentValueJson = JSON.stringify(currentValue);
    const expectedValueJson = JSON.stringify(expectedValue);

    if (currentValueJson !== expectedValueJson) {
        throw new Error(
            `expected ${expectedValue} to be ${currentValue}`
        )
    };
};
// example: expect({ name: 'John Doe' }).toBe({ name: 'John Doe' })