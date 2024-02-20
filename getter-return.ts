class Inventory {
    private items: string[] = [];
    constructor(items: string[]) {
        this.items = items;
    }
    get count() {
        console.log('Need to filter non-display, internal items.');
        return this.items.length;
    }
}