/* eslint no-void: "error" */

function runTests(setup: Function, module: [string, Function][], options: object) {
    const pretty = 'pretty' in options && options.pretty !== void 0 ? options.pretty : true;
    const tests = [];
    // run setup in a new scope
    void function init() { setup() }()
    for (const [name, test] of module) {
        void tests.push(test);
    }
}