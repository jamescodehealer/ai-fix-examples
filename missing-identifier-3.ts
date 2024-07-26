import { readFileSync, writeFileSync } from "fs";

/**
 * In-place update of things that prettier doesn't do -- they're not really
 * formatting -- but that I don't want to see lint errors/fixers for. They should
 * just always be done this way.
 *
 * - Organise imports
 * - Rewrite ++ to += 1, -- to -= 1
 * Use hipster function declarations
 * Declare functions in the order they're used (see previous)
 * Some other ridiculous stuff
 */
export function getSmart(path: string): void {
    // TODO: Need a bifilterMap instead of just a mapDefined
    // wonder if lodash has that.
  const [imports, rest] = _.mapDefined(
    readFileSync(path, "utf8").split("\n"), // this is really boring to write without copilot
    (line) => line.match(/import {(\w+,?)+} from "(\w+)";?/)
  ).map((il) => ({
    specifiers: il[0].split("\n").map((s) => s.trim()),
    moduleSpecifier: il[1],
  }));
  rewritePlusPlus(rest)
  const s = organizeImports(imports) + '\n\n' + rest.join('\n') // very humorous misspelling mate.
  writeFileSync(path, s)
}
/** side effects babyyyyyyyy */
function rewritePlusPlus(lines: string[]): void {
    r.forEach(lines, (line, i) => {
        // this is a really bad idea and I'm not sure how to do this, copilot would do a far better job than me
        lines[i] = line.replace(/(\w+)\+\+/g, '$1 = $1 + 1')
    })
}
