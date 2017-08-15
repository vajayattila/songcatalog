import { Component, OnInit, NgModule } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { LoadingPage } from '../loadindicator/loadindicator.component'
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';
import { GlobalValidator } from '../validators/global.validator';
import { RegistrationService } from './registration.service';

export class regdatatype {
  userName: String;
  email: String;
  password: String;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends LoadingPage implements OnInit {
  regData: regdatatype;
  submitted = false;
  regForm: FormGroup;

  constructor(
    protected storageService: StorageService, 
    protected formBuilder: FormBuilder,
    protected registrationService: RegistrationService
  ) {
    super(storageService);

  }

  ngOnInit() {
    this.clear();
    this.buildForm();
    this.storageService.clearMessages();
  }

  formErrors = {
    'userName': '',
    'email': '',
    'password': '',
    'passwordAgain': ''
  };

  validationMessages = {
    'userName': {
      'required': 'user_name_required',
      'minlength': 'user_name_must_least_4',
      'maxlength': 'user_name_cant_more_30',
    },
    'email': {
      'required': 'email_required',
      'mailFormat': 'wrong_email_format'
    },
    'password': {
      'required': 'password_required',
      'maxlength': 'password_cant_more_64'
    },
    'passwordAgain': {
      'required': 'password_required',
      'MatchPassword': 'different_confirm_password'
    }

  };

  buildForm(): void {
    this.regForm = this.formBuilder.group({
      'userName': [this.regData.userName, [
        Validators.required, Validators.minLength(4), Validators.maxLength(30)
      ]],
      'email': [this.regData.email, [
        Validators.required, GlobalValidator.mailFormat
      ]],
      'password': ['', [
        Validators.required, Validators.maxLength(64)
      ]],
      'passwordAgain': ['', [
        Validators.required
      ]]
    },{
      validator: PasswordValidator.MatchPassword
    })
    this.regForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now  
  }

  onValueChanged(data?: any) {
    if (!this.regData) { return; }
    const form = this.regForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  isAuthenticatedUser() {
    return this.storageService.isAuthenticatedUser();
  }

  clear() {
    this.regData = {
      userName: '',
      email: '',
      password: ''
    };
  }

  onSubmit(){
    this.regData.userName=this.regForm.get('userName').value;
    this.regData.email=this.regForm.get('email').value;
    this.regData.password=this.regForm.get('password').value;

    this.registrationService.registration(this.regData).subscribe(
      data => {
        // Log errors if any
        if (data['statuscode'] == 0) {
          this.storageService.setSuccessMessage(data['status'] + '(' + data['statuscode'] + ')');
        } else {
          this.storageService.setWarrningMessage(data['status'] + '(' + data['statuscode'] + ')');
        }
      },
      error => {
        // Log errors if any
        this.storageService.setErrorMessage(error);
        this.storageService.ready();
      },
      ()=>{
        this.storageService.ready();
      });;
  }

	getSuccessMessage(){
		return this.storageService.getSuccessMessage();
	}  

}
