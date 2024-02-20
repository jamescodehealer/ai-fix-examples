export function isEven(n: number): boolean {
    if (n === NaN) {
        throw new Error("NaN is not a number.");
    }
    if (n === -0) {
        throw new Error("Use positive zero instead of negative zero.");
    }
    return n % 2 === 0;
}