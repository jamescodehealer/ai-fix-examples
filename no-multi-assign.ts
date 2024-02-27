/* eslint no-multi-assign: "error" */
import { Node } from './no-unmodified-loop-condition';
export function grandparentOfEmpty(leaf: Node<string>) {
    let node, child, grandchild;
    node = child = grandchild = leaf;
    while (node) {
        if (node.payload === '' && grandchild.payload) {
            return [node, grandchild];
        }
        grandchild = child;
        child = node;
        node = node.parent;
    }
    return undefined;

}
export function connectFromRow(row: [number, string, { loose: boolean, lazy: boolean }]) {
    const options = row[2];
    const loose = options.loose = options.lazy || false;
    const timeout = row[0] * (loose ? 10 : 1);
    connect(row[1], timeout, loose);
}
export function connect(address: string, timeout: number, loose: boolean) {
    // TODO: Actually connect
}