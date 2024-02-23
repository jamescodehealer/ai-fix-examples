/* eslint max-nested-callbacks: ["error", 3] */
function histogram<T>(table: T[][]) {
    let map = new Map()
    table.forEach((row) => { // also these need to be something harder to change than forEach, like some or all
        row.forEach((cell) => {
            // TODO: Some callback to call on `map` (might need to change its type)
            map.set(cell, (map.get(cell) || 0) + 1)
        })
    })
}