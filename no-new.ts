/* eslint no-new: "error" */
import fs from 'node:fs';
class Histogram {
    filename: string
    index: number
    rows: string[][] = []
    members: number[] = []
    histogram: Map<number, number> = new Map()
    constructor(filename: string, index: number) {
        this.filename = filename;
        this.index = index;
        this.readFile();
        this.extractMembers()
        this.countMembers()
        this.printHistogram()
    }
    readFile() {
        const s = fs.readFileSync(this.filename, 'utf8')
        this.rows = s.split('\n').map(line => line.split(','));
    }
    extractMembers() {
        this.members = this.rows.map(row => Number(row[this.index]));
    }
    countMembers() {
        this.histogram = new Map()
        for (const m of this.members) {
            this.histogram.set(m, (this.histogram.get(m) || 0) + 1);
        }
    }
    printHistogram() {
        for (const [m, c] of this.histogram) {
            console.log(`${m}: ${'#'.repeat(c)}`);
        }
    }
}
new Histogram('input.csv', 0);
