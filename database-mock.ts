export function connectFromRow(row: [number, string, { loose: boolean, lazy: boolean }]) {
    const options = row[2];
    const loose = options.loose = options.lazy || false;
    const timeout = row[0] * (loose ? 10 : 1);
    connectLegacy(row[1], { timeout, loose });
}
export function connectLegacy(address: string, options: { timeout?: number, loose: boolean } = { loose: false }): void {
}
export function connect(address: string, timeout: number, loose: boolean): void {
    // TODO: Actually connect, starting with making this call work: 
    // intended usage:  connect('https://some.site', timeout, /*loose*/ true)
}
/** Somehow copilot knew about the uses of findRow elsewhere in my project when suggesting this signature. */
export function findRow(table: string, conditions: [string, string][], order?: string, limit?: number): string[] {
    // TODO: Actually find row
    // (I don't know how much real code I need here to make this example work)
    return []
}