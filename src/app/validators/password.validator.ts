import { AbstractControl } from '@angular/forms';
export class PasswordValidator {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let passwordAgain = AC.get('passwordAgain').value; // to get value in input tag
        if (password != passwordAgain) {
            AC.get('passwordAgain').setErrors({ 'MatchPassword': true });
        } else {
            return null;
        }
    }
}