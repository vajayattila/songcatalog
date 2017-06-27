import { Component, OnInit, NgModule } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { LoadingPage } from '../loadindicator/loadindicator.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    'paswordAgain': ''
  };

  validationMessages = {
    'userName': {
      'required': 'Username is required.',
      'minlength': 'Username must be at least 4 characters long.',
      'maxlength': 'username cannot be more than 64 characters long.',
    },
    'email': {
      'required': 'Email is required.'
    },
    'password': {
      'required': 'Password is required.'
    },
    'passwordAgain': {
      'required': 'The second password differs from the first password.'
    }

  };

  buildForm(): void {
    this.regForm = this.formBuilder.group({
      'userName': [this.regData.userName, [
        Validators.required
      ]],
      'email': [this.regData.email, [
        Validators.required
      ]],
      'password': [this.regData.password, [
        Validators.required
      ]],
      'passwordAgain': [this.regData.passwordAgain, [
        Validators.required
      ]]
    })
    this.regForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now  
  }

  onValueChanged(data?: any) {
    console.log(data);
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
}
