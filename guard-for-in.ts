export function printObjectDeep(o: object) {
    for (const key in o) {
        const x = (o as any)[key] as unknown;
        if (Array.isArray(x)) {
            x.map(printObjectDeep);
        }
        else {
            console.log(x);
        }
    }
}