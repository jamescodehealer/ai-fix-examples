export function checkCustomers(name: string, customers: { name: string }[]) {
  for (const customer of customers) {
    if (customer.name !== name) {
      checkCustomer(customer);
    }
    break;
  }
}
function checkCustomer(customer: { name: string }) {
    if (customer.name === 'n/a') {
        throw new Error('no customer');
    }
    // TODO: Finish this
}
