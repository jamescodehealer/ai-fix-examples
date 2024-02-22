import { List } from './class-methods-use-this';
export function findTail<T>(x: T, l: List<T>): List<T> | undefined {
    let node = l;
    while (node) {
        if (x === node.a) {
            return node;
        }
        node = node.d;
    }
    return undefined; // Add this line to return a value at the end of the function
}