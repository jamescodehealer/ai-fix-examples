import { List } from './class-methods-use-this';
class OrderedList<T> extends List<T> {
    private _insertionOrder: number;
    get insertionOrder(): number {
        return this._insertionOrder;
    }
    constructor(a: T, d: List<T>, insertionOrder: number) {
        super(a, d);
        this._insertionOrder = insertionOrder;
    }
    set insertionOrder(n: number) {
        this._insertionOrder = n;
        // TODO: Figure out how to reorder the list based on the new insertion order
    }
}