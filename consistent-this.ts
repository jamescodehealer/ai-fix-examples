/* eslint-disable @typescript-eslint/no-this-alias */
import { List } from './class-methods-use-this'
class IterList<T> extends List<T> {
    iterate(): () => Iterable<T> {
        const self = this
        return function* iterate(): Iterable<T> {
            yield self.a
            yield* (self.d as IterList<T>).iterate()()
        }
    }
}
