import { LoaderClass } from './loaderclass';

export class MessageClass extends LoaderClass{
	protected operationName: String;
	protected infoMessage: Array<String>;
	protected errorMessage: Array<String>;
	protected warningMessage: Array<String>;
	protected successMessage: Array<String>;
	protected description: String;
	protected statusCode: Number;

	constructor() {
		super();
	}

	clearMessages(){
		this.clearOperationName();
		this.clearInfoMessage();
		this.clearErrorMessage();
		this.clearWarningMessage();
		this.clearSuccessMessage();
		this.clearStatusCode();
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
		this.infoMessage = null;
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
		this.errorMessage = null;
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
		this.warningMessage = null;
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
		this.successMessage = null;
	}

	clearDescription(){
		this.description = null;
	}

	setDescription(message: String) {
		this.description = message;
	}	

	getDescription(): String {
		return this.description;
	}	
		
	clearStatusCode(){
		this.statusCode = null;
	}

	setStatusCode(status: Number) {
		this.statusCode = status;
	}	

	getStatusCode(): Number {
		return this.statusCode;
	}		

	getStatusCodeString(): String {
		return ' (' + this.statusCode + ')';
	}

	clearOperationName() {
		this.operationName = null;
	}

	setOperationName(name: String) {
		this.clearMessages();
		this.operationName = name;
	}

	getOperationName(): String {
		return this.operationName;
	}	

}
