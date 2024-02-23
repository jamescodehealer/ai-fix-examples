function calculateName(id: object) {
    return 'example, to be done later'
}
export function connect(id: object, complex: boolean) {
    let o;
    if (complex) {
        const name = calculateName(id);
        const address = 'https://github.com/api/';
        o = { name, address }
    } else {
        o = { name: 'localhost', address: '192.168.0.0' }
    }
    const outer = { ...o, id, readonly: true }
    return outer
}