/* eslint func-style: "error" */
export function testo(tests: Record<string, () => void>) {
    for (const key in tests) {
        if (tests.hasOwnProperty(key)) {
            tests[key]();
        }
    }
}