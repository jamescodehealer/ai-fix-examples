namespace AI.Fixes;
class BadCall {
    public static void Main() {
        DatabaseMock.connect('192.168.0.1', /* loose */ false, 1000)
    }
}