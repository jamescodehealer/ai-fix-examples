export function mistake(paths: string[]) {
    if (paths.length === 0) {
        throw "No files to lint.";
    }
    switch (paths.length) {
        case 0:
            console.log("Warning: possible mistake, no paths provided.");
            return 'ok';
        case 1:
        case 2:
            return "ok";
        default:
            return "too many paths";
    }
}
