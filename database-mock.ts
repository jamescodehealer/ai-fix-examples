export function connectFromRow(row: [number, string, { loose: boolean, lazy: boolean }]) {
    const options = row[2];
    const loose = options.loose = options.lazy || false;
    const timeout = row[0] * (loose ? 10 : 1);
    connect(row[1], timeout, loose);
}
export function connect(address: string, timeout: number, loose: boolean) {
    // TODO: Actually connect
}
/** Somehow copilot knew about the uses of findRow elsewhere in my project when suggesting this signature. */
export function findRow(table: string, conditions: [string, string][], order?: string, limit?: number): string[] {
    // TODO: Actually find row
    // (I don't know how much real code I need here to make this example work)
    return []
}