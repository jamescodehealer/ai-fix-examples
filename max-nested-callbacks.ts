/* eslint max-nested-callbacks: ["error", 2] */
function histogram<T>(table: T[][]) {
    const h: [T, number][] = []
    table.forEach((row) => { // also these need to be something harder to change than forEach, like some or all
        row.forEach((cell) => {
            // TODO: Some callback to call on `map` (might need to change its type)
            if (h.some(entry => entry[0] === cell)) {
                h.find(entry => entry[0] === cell)![1]++
            } else {
                h.push([cell, 1])
            }
        })
    })
}