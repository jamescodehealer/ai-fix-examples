function showDetails(rows: Array<{ name: string, address: string, account: number, tombstone: boolean }>) {
let n = 0;
    for (const row of rows) {
        if (row.tombstone) {
            continue;
        }
        console.log(n, ':', row.name, row.address, row.account);
        n + 1;
    }
}
