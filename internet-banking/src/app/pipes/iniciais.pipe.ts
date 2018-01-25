// pipe usada para pegar nome completo e retornar apenas iniciais
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: "iniciais"
})
export class IniciaisPipe implements PipeTransform {
	transform(fullName: string): string {
		let nameInitials = "";

		if (fullName) {

			let array = fullName.split(' ');

			if (array.length == 1 ) {
				nameInitials = array[0].charAt(0).toUpperCase();
			} else {
				nameInitials = array[0].charAt(0).toUpperCase() + array[array.length - 1].charAt(0).toUpperCase();
			}

		}
		return nameInitials;
	}
}
