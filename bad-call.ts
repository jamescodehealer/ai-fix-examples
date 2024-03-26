/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable init-declarations */
import { connectFromRow } from './no-nested-ternary';
import { Node } from './no-unmodified-loop-condition';
import { grandparentOfEmpty } from './no-multi-assign';
import { findTail } from './no-param-reassign';
import { connect, findRow } from './database-mock'

export function condenseShuffle(l: Node<string>, r: Node<number>): Node<string> {
    // return nestedPath({ payload: { payload: 'VP', parent: undefined }, parent: { payload: { payload: 'NP', parent: undefined }, parent: undefined } });
    // const emptyG = grandparentOfEmpty({ payload: 'VP', parent: { payload: 'NP', parent: null } });
    let grandchild;
    const emptyG = grandparentOfEmpty(l);
    if (emptyG) {
        grandchild = emptyG[1];
    }
    else {
        const emptyGR = grandparentOfEmpty(r);
        if (emptyGR) {
            grandchild = emptyGR[1];
        }
    }
    if (!grandchild) {
        return { payload: '__leaf__', parent: undefined };
    }
    else if (grandchild.payload === '__leaf__') {
        return grandchild;
    }
    return grandchild;
}
// TODO: Need more expected fixes:
// - swap parameters
// - pass an object, not a string
// - signature takes an options bag, not individual parameters
// - pass an object, not a different object
// - don't pass something that's possibly undefined
// TODO: Rename and add more code for flavour and context
function complexImportedLiteral() {
    return connectFromRow(['localhost', 1000, { loose: false, lazy: true }])
}
function missingArgumentImported() {
    connect('192.168.0.1', 1000)
}
function localFunction() {
    return definedFunction();
}
function importFunction() {
    return localFunction();
}
function builtinFunction() {
    return importFunction();
}