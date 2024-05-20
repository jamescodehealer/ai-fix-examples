package java.fixes;
import static java.fixes.DatabaseMock.connect;;
class BadCall {
    public static void main(String[] args) {
        connect("192.168.0.1", /* loose */ true, 1000);
    }
}