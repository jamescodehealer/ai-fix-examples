/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable init-declarations */
import { connectFromRow } from './no-nested-ternary';
import { Node } from './no-unmodified-loop-condition';
import { connect, grandparentOfEmpty } from './no-multi-assign';
import { findTail } from './no-param-reassign';

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
// TODO: Rename and add more code for flavour and context
function complexImportedLiteral() {
    return connectFromRow(['localhost', 1000, { loose: false, lazy: true }])
}
function xImported() {
    try {
    connect('192.168.0.1', /*loose*/ false, 1000)
    }
    catch (e) {
        console.error(e)
        return 'something else'
    }
    console.log('finding stuff...')
    return 'stuff'
}
function missingImported() {
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