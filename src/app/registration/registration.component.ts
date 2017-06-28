import { Component, OnInit, NgModule } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { LoadingPage } from '../loadindicator/loadindicator.component'
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';
import { GlobalValidator } from '../validators/global.validator';

export class regdatatype {
  userName: String;
  email: String;
  password: String;
  passwordAgain: String;
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

  constructor(protected storageService: StorageService, protected formBuilder: FormBuilder) {
    super(storageService);
    this.clear();
    this.buildForm();
  }

  ngOnInit() {

  }

  formErrors = {
    'userName': '',
    'email': '',
    'password': '',
    'passwordAgain': ''
  };

  validationMessages = {
    'userName': {
      'required': 'Username is required.',
      'minlength': 'Username must be at least 4 characters long.',
      'maxlength': 'username cannot be more than 30 characters long.',
    },
    'email': {
      'required': 'Email is required.',
      'mailFormat': 'Wrong email format'
    },
    'password': {
      'required': 'Password is required.',
      'maxlength': 'username cannot be more than 64 characters long.'
    },
    'passwordAgain': {
      'required': 'Password is required.',
      'MatchPassword': 'The second password differs from the first password.'
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
      'password': [this.regData.password, [
        Validators.required, Validators.maxLength(64)
      ]],
      'passwordAgain': [this.regData.passwordAgain, [
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
      password: '',
      passwordAgain: ''
    };
  }

  onSubmit(){
    console.log('submited');

  }

}
