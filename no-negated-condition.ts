/* eslint no-negated-condition: "error" */
function init(address: string, options: { hot?: boolean, latency?: number } | null | undefined) {
    let hot = false;
    let latency = 100;
    if (options !== null && options !== undefined) {
        hot = options.hot !== undefined ? options.hot : hot;
        latency = options.latency !== undefined ? options.latency : latency;
    }
    // TODO: Finish
    return address

}
export function checkCustomers(name: string, customers: { name: string }[]) {
    for (const customer of customers) {
        if (customer.name !== name) {
            checkCustomer(customer);
        }
        else {
            continue;
        }
    }
}
function checkCustomer(customer: { name: string }) {
        if (customer.name === 'n/a') {
                throw new Error('no customer');
        }
        // TODO: Finish this
}
