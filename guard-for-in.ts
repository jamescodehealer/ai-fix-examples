export function printObjectDeep(o: object) {
    for (const key in o) {
        if (o.hasOwnProperty(key)) {
            console.log(key, o[key]);
        }
    }
}