/**
 * Note: copilot gets the right answer here, sometimes, but it always describes the wrong reasoning.
 * I'd rather add explicit prompts because of that.
 */
class Basis {
  m() {
    return 'an example string'
  }
  g(n: number): void {
    console.log(n)
  }
  static default() {
    return new Basis()
  }
}
function realism(original: Basis, base: Basis | undefined) {
  const result = original.m()
  (base ?? original).g(result.length)
}

const hello = "world"
;[1].forEach(n => console.log(n));

const x = (function (x: any) {})
`hello`;

const y = function (x: any) {};
y
`hello`;

// spoilers
const regex = 1
const g = { test(bar: any): number { return 1 } }; //  new RegExp('hi')

const z = foo 
/regex/g.test(bar);
