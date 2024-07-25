import { connect, connectLegacy } from './database-mock';
export class StoreData {

	height: number | undefined;

	constructor() { }

	storeHeight() {
		this.privateStoreHeight(0);
		connectLegacy('192.168.0.1', { timeout: 1000, loose: false });
		connectReal('192.168.0.1', 1000, false);
	}

	privateStoreHeight(height: number) {
		this.height = height;
	}
}
function connectReal(address: string, options: { timeout?: number, loose: boolean }): void {
	connect(address, options.timeout ?? 1000, options.loose);
}