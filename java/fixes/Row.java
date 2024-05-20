package java.fixes;
import java.util.Map;
public class Row {
    public int timeout;
    public String address;
    public boolean loose;
    public boolean lazy;
    public Row(int timeout, String address, Map<String, Boolean> options) {
        this.timeout = timeout;
        this.address = address;
        this.loose = options.get("loose");
        this.lazy = options.get("lazy");
    }
}
