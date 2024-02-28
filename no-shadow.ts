/* eslint no-shadow: "error" */
/* eslint no-shadow-restricted-names: "error" */
import fs from "node:fs";
fs.readFile("foo.txt", "utf8", (e, s) => {
    if (e) {
        console.error(e);
    } else {
        console.log(s);
        fs.writeFile("bar.txt", s, (e) => {
            console.error(e);
        });
    }
});

const eval = 'foo'
