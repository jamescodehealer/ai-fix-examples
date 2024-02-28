/* eslint no-sequences: ["error", { "allowInParentheses": true }] */
Math.max(1, 2)
const list = (1, 2, 3, 4, 5)
console.log(Math.max(list))

// tricky
import { Node } from './no-unmodified-loop-condition';
function trickyIterate(node: Node<string> | undefined) {
    let cur = ""
    if (!node) return;
    while (node = node.parent, cur = node?.payload ?? "") {
        if (!node) break;
    }
}
function foo(): number {
    return 12
}