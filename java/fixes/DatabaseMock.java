package java.fixes;
class DatabaseMock {
    public static void connectFromRow(Row row) {
        var loose = row.loose;
        var timeout = row.timeout * (loose ? 10 : 1);
        connect(row.address, timeout, loose);
    }
    public static void connect(String address, int timeout, boolean loose) {
        // TODO: Actually connect, starting with making this call work: 
        // intended usage:  connect('https://some.site', timeout, /*loose*/ true)
    }
}
