// top-down programming -- but this is equivalent to "copilot write me some code"
// so not interesting specifically for /fix
interface Import {
    specifiers: string[];
    moduleSpecifier: string;
}

export function organiseImports(imports: Import[]/** did an OK job here but not great */): string {
    const sorted = sortImports(imports);
    const gaps = findGaps(sorted);
    const formatted = format(sorted, gaps);
    return formatted
}