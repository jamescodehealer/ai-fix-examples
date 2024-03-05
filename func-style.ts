/* eslint func-style: "error" */
export function testo(tests: Record<string, () => void>) {
    for (const key in tests) {
        tests[key]();
    }
}