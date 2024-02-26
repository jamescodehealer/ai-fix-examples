/* eslint no-continue: "error" */
import { Node } from './no-unmodified-loop-condition';
export function pathP(leaf: Node<number>) {
    let logProb = 0.0;
    while (leaf.parent) {
        if (leaf.payload === 0) {
            continue;
        }
        const start = Math.abs(leaf.payload);
        const total = complex(start);
        if (total === 0) {
            continue;
        }

        logProb += -Math.log(total);
        leaf = leaf.parent;
    }
    return logProb;
}
function complex(n: number): number {
    return n; // TODO: implement
}
