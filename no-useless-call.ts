/* eslint no-useless-call: "error" */
/** safer filter requires its function to return boolean and doesn't pass a `this` parameter to it  */
export function saferFilter<T>(l: T[], f: (x: T) => boolean): T[] {
    return l.filter.call(l, f)
}