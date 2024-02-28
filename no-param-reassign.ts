/* eslint no-param-reassign: "error" */
import { List } from './class-methods-use-this';
class AccessibleList<T> extends List<T> {
    get head() { return this.a as AccessibleList<T> }
    get tail() { return this.d as AccessibleList<T> }
}
export function findTail<T>(x: T, node: AccessibleList<T>): AccessibleList<T> | undefined {
    while (node) {
        if (x === node.head) {
            return node;
        }
        node = node.tail;
    }
    return undefined; // Add this line to return a value at the end of the function
}