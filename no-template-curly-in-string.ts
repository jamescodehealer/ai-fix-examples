import { TestError } from "./no-ex-assign";

export function buildTestErrorMessage(name: string, innerError: TestError) {
    return 'Test failed: ${name}:${innerError.name} -- ${innerError.message}';
}