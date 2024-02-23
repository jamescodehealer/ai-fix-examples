/*eslint id-match: ["error", "^[a-z]+([A-Z][a-z]+)*[0-9]+$"]*/
export function map2<T, U, V>(f: (t: T, u: U) => V, ts: T[], us: U[]): V[] {
    const vs = []
    for (let i = 0; i < Math.min(ts.length, us.length); i++) {
        vs.push(f(ts[i], us[i]));
    }
    return vs;
}