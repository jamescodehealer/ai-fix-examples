/* eslint no-plusplus: "error" */
/* eslint no-proto: "error" */
// bonus prefer-for-of code
// export function logRows(rows: string[][]) {
//     for (let i = 0; i < rows.length; i++) {
//         console.log(rows[i]);
//     }
// }
export function logRows(rows: string[][]) {
    let i = 0;
    for (const row of rows) {
        i++;
        console.log(i, row);
    }
}
