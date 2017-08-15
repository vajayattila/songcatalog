import { LoaderClass } from './loaderclass';

export class MessageClass extends LoaderClass{
	protected infoMessage: Array<String>;
	protected errorMessage: Array<String>;
	protected warrningMessage: Array<String>;
	protected successMessage: Array<String>;

	constructor() {
		super();
	}

	clearMessages(){
		this.clearInfoMessage();
		this.clearErrorMessage();
		this.clearWarrningMessage();
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

	setWarrningMessage(message: String) {
		this.clearMessages();
		this.warrningMessage = [message];
	}

	getWarrningMessage(): Array<String> {
		return this.warrningMessage;
	}

	addWarrningMessage(message) {
		this.warrningMessage.push(message);
	}

	clearWarrningMessage() {
		this.warrningMessage = null;
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
