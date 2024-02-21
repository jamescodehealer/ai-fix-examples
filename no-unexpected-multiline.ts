function bar(x: number) {
  return {
    baz() {
      return x;
    },
  };
}
const foo = bar
(1 || 2).baz();

const hello = "world"
[(1, 2, 3)];

const x = (function (x: any) {})
`hello`;

const y = function (x: any) {};
y`hello`;

// spoilers
const regex = 1
const g = new RegExp('hi')

const z = foo / regex / g.test(bar);
