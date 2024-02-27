/* eslint no-magic-numbers: "error" */
export function connectFromRow(row: [number, string, { loose: boolean, lazy: boolean }]) {
    const timeout = row[0];
    const address = row[1];
    const options = row[2];
    if (options.lazy) {
        timeout = -1;
    } else if (options.loose) {
        timeout *= 10;
    }
    // TODO: Connect to address
}