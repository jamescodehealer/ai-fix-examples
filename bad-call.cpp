#include "./database-mock.h"
int main() {
    auto x = "hi";
    connect("192.168.0.1", /* loose */ false, "PUT");
    return 0;
}