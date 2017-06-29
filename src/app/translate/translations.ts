// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_HU_NAME, LANG_HU_TRANS } from './lang-hu';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
const dictionary = {
/*    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_HU_NAME]: LANG_HU_TRANS*/
    'en': LANG_EN_TRANS,
    'hu': LANG_HU_TRANS
    
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];