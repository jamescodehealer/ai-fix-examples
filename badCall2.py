from database_mock import connect, findRow
def find_customer(name: str, location: str):
    try:
        connect('192.168.0.1', False, 1000)
    except:
        # console.error(e)
        return 'something else'
    customer = findRow('customers', [('name', name), ('country', location)], 'top', 100)
    if customer:
        return customer
    return findRow('customers', [('name', 'default'), ('country', 'unknown')], 'top', 100)