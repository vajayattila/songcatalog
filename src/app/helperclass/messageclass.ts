import { LoaderClass } from './loaderclass';

export class MessageClass extends LoaderClass{
	protected infoMessage: Array<String>;
	protected errorMessage: Array<String>;
	protected warrningMessage: Array<String>;

	constructor() {
		super();
	}

	setInfoMessage(message: String) {
		this.infoMessage = [message];
	}

	getInfoMessage(): Array<String> {
		return this.infoMessage;
	}

	addInfoMessage(message) {
		this.infoMessage.push(message);
	}

	clearInfoMessage() {
		this.infoMessage = [];
	}

	setErrorMessage(message: String) {
		this.errorMessage = [message];
	}

	getErrorMessage(): Array<String> {
		return this.errorMessage;
	}

	addErrorMessage(message) {
		this.errorMessage.push(message);
	}

	clearErrorMessage() {
		this.errorMessage = [];
	}

	setWarrningMessage(message: String) {
		this.warrningMessage = [message];
	}

	getWarrningMessage(): Array<String> {
		return this.warrningMessage;
	}

	addWarrningMessage(message) {
		this.warrningMessage.push(message);
	}

	clearWarrningMessage() {
		this.warrningMessage = [];
	}
}
