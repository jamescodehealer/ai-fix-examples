/* eslint no-label-var: "error" */
import { Node } from './no-unmodified-loop-condition';
export function nestedPath(nnodes: Node<Node<string>>) {
    let outer = nnodes.payload;
    outer: while (nnodes.parent) {
        const nodes = nnodes.payload;
        while (nodes.parent) {
            if (nodes.payload === 'VP') {
                outer = nodes;
                break outer;
            }
        }
    }
    return outer.parent
}