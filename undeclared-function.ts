import fs from 'node:fs'

export function readCsv(path: string, columnCount?: number): string[][] {
    const lines = fs.readFileSync(path, "utf-8").split('\n');
    return lines.map(line => readCsvLine(line, columnCount));
}