/* eslint no-multi-str: "error" */
/** Return the standard CLI help message */
export function help() {
    return "Usage: generate-scene.js [options] <outfile>\
    \
    Generate a scene with the specified characters.\
    \
    -a -- Include all characters\
    -c <character codes> -- Include the listed characters, separate by commas.\
    -x <character file> -- Include a non-listed character, specified by a file.";
}