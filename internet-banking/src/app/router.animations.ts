import { trigger, state, animate, style, transition } from '@angular/core';

export function moveInLeft() {
	return trigger('moveInLeft', [
		state('void', style({ position: 'absolute', width: '100%' })),
		state('*', style({ position: 'absolute', width: '100%' })),
		
		transition(':enter', [
			style({ opacity: '0', transform: 'translateX(100px)' }),
			animate('.5s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
		]),
		transition(':leave', [
			style({ opacity: '1', transform: 'translateX(0)' }),
			animate('.5s ease-in-out', style({ opacity: '0', transform: 'translateX(-100px)' }))
		])
	]);
}
