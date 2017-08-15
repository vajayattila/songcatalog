export class LoaderClass {
	private loading;

	standBy() {
		this.loading = true;
	}

	ready() {
		this.loading = false;
	}

	isReady() {
		return !this.loading;
	}

}