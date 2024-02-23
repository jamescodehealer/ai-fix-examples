/* eslint id-denylist: ["error", "data", "callback", "id", "name"] */
export function searchObject(o: object, name: string) {
    for (const x in o) {
        if (x === name) {
            return (o as any)[x];
        }
    }
    return false;
}