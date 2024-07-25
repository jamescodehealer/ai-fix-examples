interface I {
    p: number
    q: string
    f: (n: number) => number
}
function somethingWithObjectType(x: {
  thing1: number;
  thing2: string;
  every: boolean;
}) {
  return x.every ? x.thing1 : x.thing2;
}
function somethingWithInterfaceType(i: I) {
  // oh no, now I need to look up the interface type too (or else make gpt guess what its contents could be)
  // (4 and above can probably do this just fine, and 3.5 might be able to as well)
}
function test() {
  const result = somethingWithObjectType({
    all: true,
    stuff: "here",
    stuff2: "there",
  });
  if (typeof result === "number") {
    console.log("Found " + result + " things");
  } else {
    console.log("Found " + result);
  }
}
function test2() {
  const result = somethingWithInterfaceType({
    thing1: 1,
    thing2: "here",
    every: true,
  });
}
