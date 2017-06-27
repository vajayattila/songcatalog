import { LoaderClass } from './loaderclass';

export class MessageClass extends LoaderClass{
	protected infoMessage: Array<String>;
	protected errorMessage: Array<String>;
	protected warningMessage: Array<String>;
	protected successMessage: Array<String>;

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

	setWarningMessage(message: String) {
		this.warningMessage = [message];
	}

	getWarningMessage(): Array<String> {
		return this.warningMessage;
	}

	addWarningMessage(message) {
		this.warningMessage.push(message);
	}

	clearWarningMessage() {
		this.warningMessage = [];
	}

	setSuccessMessage(message: String) {
		this.successMessage = [message];
	}

	getSuccessMessage(): Array<String> {
		return this.successMessage;
	}

	addSuccessMessage(message) {
		this.successMessage.push(message);
	}

	clearSuccessMessage() {
		this.successMessage = [];
	}
}
