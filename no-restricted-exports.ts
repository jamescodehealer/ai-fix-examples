/* eslint no-restricted-exports: ["error", { "restrictedNamedExports": ["bifilter"] }] */
/** eslint no-restricted-exports: ["error", { "restrictDefaultExports": { direct: true, named: true, defaultFrom: true, namedFrom: true, namespaceFrom: true } } ] */
export function bifilter (l: any[], f: (t: any) => boolean): [any[], any[]] {
    const pass = [];
    const fail = [];
    for (const t of l) {
        if (f(t)) {
            pass.push(t);
        }
        else {
            fail.push(t);
        }
    }
    return [pass, fail];
}