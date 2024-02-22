export interface Node<T> {
    payload: T;
    parent: Node<T> | undefined;
}
export function findRoot<T>(start: Node<T>) {
    let node: Node<T> | undefined = start
    let prev: Node<T> | undefined = node
    while (start) {
        prev = node
        node = node!.parent
    }
    return prev;
}