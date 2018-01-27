import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
	transform(value: any): number {
		return this.localeString(value);
	}

	missingDecimalCheck(nStr) {
		nStr += '';
		let x = nStr.split(',')[1];
		if (x && x.length === 1) return true;
		return false;
	}

	localeString(nStr) {
		let x, x1, x2, rgx;
		nStr += '';
		x = nStr.split(','); // only necesary because i receive 1000.1 for example and south american countries use , for decimal sep not . ... change to , if not receiving numerals with decimal comma
		x1 = x[0];
		x2 = x.length > 1 ? ',' + x[1] : '';
		rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + '.' + '$2'); // if you want to use american numerals just replace '.' with ',' and result will be like 1,000,000
		}
		x = x1 + x2;
		if (this.missingDecimalCheck(x)) return x += '0';
		return x;
	}
}
