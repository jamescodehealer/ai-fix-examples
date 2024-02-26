/* eslint no-extend-native: "error" */
// extensions
Array.prototype.bifilter = function bifilter<T>(f: (t: T) => boolean): [T[], T[]] {
    const pass: T[] = []
    const fail: T[] = []
    for (const t of this) {
        if (f(t)) {
            pass.push(t)
        } else {
            fail.push(t)
        }
    }
    return [pass, fail]
}