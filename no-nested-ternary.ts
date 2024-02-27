/* eslint no-nested-ternary: "error" */
export function connectFromRow(row: [number, string, { loose: boolean, lazy: boolean }]) {
    const address = row[1];
    const options = row[2];
    const timeout = options.lazy ? -1 
        : options.loose ? row[0] * 10 
        : row[0];
    // TODO: Connect to address
}