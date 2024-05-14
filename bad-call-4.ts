import { connectLegacy, findRow } from './database-mock'
export function findCustomer(name: string, location: string) {
    try {
        connectLegacy('192.168.0.1', /*loose*/ false, 1000)
    }
    catch (e) {
        console.error(e)
        return 'something else'
    }
    const customer = findRow('customers', [['name', name], ['country', location]], 'top', 100)
    if (customer) {
        return customer
    }
    return findRow('customers', [['name', 'default'], ['country', 'unknown']], 'top', 100)
}