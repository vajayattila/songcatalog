import { LoaderClass } from './loaderclass';

export class MessageClass extends LoaderClass{
	protected infoMessage: Array<String>;
	protected errorMessage: Array<String>;
	protected warningMessage: Array<String>;
	protected successMessage: Array<String>;

	constructor() {
		super();
	}

	clearMessages(){
		this.clearInfoMessage();
		this.clearErrorMessage();
		this.clearWarningMessage();
		this.clearSuccessMessage();
	}

	setInfoMessage(message: String) {
		this.clearMessages();
		this.infoMessage = [message];
	}

	getInfoMessage(): Array<String> {
		return this.infoMessage;
	}

	addInfoMessage(message) {
		this.infoMessage.push(message);
	}

	clearInfoMessage() {
		this.infoMessage = null;
	}

	setErrorMessage(message: String) {
		this.clearMessages();
		this.errorMessage = [message];
	}

	getErrorMessage(): Array<String> {
		return this.errorMessage;
	}

	addErrorMessage(message) {
		this.errorMessage.push(message);
	}

	clearErrorMessage() {
		this.errorMessage = null;
	}

	setWarningMessage(message: String) {
		this.clearMessages();
		this.warningMessage = [message];
	}

	getWarningMessage(): Array<String> {
		return this.warningMessage;
	}

	addWarningMessage(message) {
		this.warningMessage.push(message);
	}

	clearWarningMessage() {
		this.warningMessage = null;
	}

	setSuccessMessage(message: String) {
		this.clearMessages();
		this.successMessage = [message];
	}

	getSuccessMessage(): Array<String> {
		return this.successMessage;
	}

	addSuccessMessage(message) {
		this.successMessage.push(message);
	}

	clearSuccessMessage() {
		this.successMessage = null;
	}
        
}
