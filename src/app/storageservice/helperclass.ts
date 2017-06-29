import { MessageClass } from './messageclass';
import { TranslateService } from '../translate/translate.service';

export class HelperClass extends MessageClass {
	public supportedLanguages: any[];

	constructor(protected translate: TranslateService) {
		super();
		this.supportedLanguages = [
			{ display: 'English', value: 'en' },
			{ display: 'Magyar', value: 'hu' }
		];

		// set current langage
		this.selectLanguage('hu');
	}

	isCurrentLanguage(lang: string) {
		// check if the selected lang is current lang
		return lang === this.translate.currentLang;
	}

	selectLanguage(lang: string) {
		// set current lang;
		this.translate.use(lang);
		//this.refreshText();
	}

	instant(key: string): string {
		return this.translate.instant(key);
	}

	/*refreshText() {
        // refresh translation when language change
        this.translatedText = this.translate.instant('hello world');
    }*/
}