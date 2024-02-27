/* eslint no-lone-blocks: "error" */
import { isDeepLooseEqual } from './no-dupe-else-if'
export function testIsDeepEqual() {
    {
        isDeepLooseEqual(1, 1);
        isDeepLooseEqual(1, {});
        isDeepLooseEqual({}, 1);
        isDeepLooseEqual({}, {});
    }
    {
        var a = {};
        isDeepLooseEqual(a, a);
    }
    {
        isDeepLooseEqual({ a: 1 }, { a: 1 });
        isDeepLooseEqual({ a: 1 }, { a: 2 });
        isDeepLooseEqual({ a: 1 }, { b: 1 });
    }
}