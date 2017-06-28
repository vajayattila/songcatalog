import { AbstractControl } from '@angular/forms';
export class GlobalValidator {

    static mailFormat(AC: AbstractControl) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (AC.value != "" && (AC.value.length <= 5 || !EMAIL_REGEXP.test(AC.value))) {
            return { "mailFormat": true };
        }

        return null;
    }
}