/** eslint id-length: "error"  */
export function searchObject(o: object, nom: string) {
    for (const x in o) {
        if (x === nom) {
            return (o as any)[x];
        }
    }
    return false;
}