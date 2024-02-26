/* eslint no-bitwise: "error" */
export function display(s: string, width = 0, truncate = false) {
    width = width | 80;
    if (s.length > width & truncate) {
        s = s.slice(0, width) + '...';
    }
    return ' '.repeat(width - s.length) + s;
}