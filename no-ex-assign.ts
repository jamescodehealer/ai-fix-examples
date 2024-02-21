import { testQuotes } from './no-duplicate-imports'
export class TestError extends Error {
    innerError: Error;
    name: string;
    constructor(name: string, innerError: Error) {
        super('Test failed: ' + name);
        this.innerError = innerError;
        this.name = name
    }
}
export function runTest() {
    try {
        testQuotes()
    } catch (e) {
        if (e instanceof Error) {
            // TODO: Update internal test state and rethrow a packaged error
            e = new TestError('quotes', e)
            console.log((e as TestError).message)
            throw e;
        }
        else {
            throw e;
        }
    }
}