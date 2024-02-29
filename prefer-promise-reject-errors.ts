/* eslint prefer-promise-reject-errors: "error" */
export function lintFiles(paths: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
        if (paths.length === 0) {
            reject(new Error("No files to lint."));
        }
        switch (paths.length) {
            case 0:
                console.log("Warning: possible mistake, no paths provided.");
                resolve('ok');
                break;
            case 1:
            case 2:
                resolve("ok");
                break;
            default:
                resolve("too many paths");
                break;
        }
    });
}