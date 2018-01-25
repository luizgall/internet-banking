import { trigger, state, animate, style, transition } from '@angular/core';

export function moveIn() {
	return trigger('moveIn', [
		state('void', style({ position: 'fixed', width: '100%' })),
		state('*', style({ position: 'fixed', width: '100%' })),
		transition(':enter', [
			style({ opacity: '0', transform: 'translateX(100px)' }),
			animate('.6s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
		]),
		transition(':leave', [
			style({ opacity: '1', transform: 'translateX(0)' }),
			animate('.3s ease-in-out', style({ opacity: '0', transform: 'translateX(-200px)' }))
		])
	]);
}

export function fallIn() {
	return trigger('fallIn', [
		transition(':enter', [
			style({ opacity: '0', transform: 'translateY(40px)' }),
			animate('.4s .2s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
		]),
		transition(':leave', [
			style({ opacity: '1', transform: 'translateX(0)' }),
			animate('.3s ease-in-out', style({ opacity: '0', transform: 'translateX(-200px)' }))
		])
	]);
}

export function moveInLeft() {
	return trigger('moveInLeft', [
		transition(':enter', [
			style({ opacity: '0', transform: 'translateX(-100px)' }),
			animate('.6s .2s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
		])
	]);
}

export function moveInDown() {
	return trigger('moveInDown', [
		transition(':enter', [
			style({ opacity: '0', transform: 'translateY(-100px)' }),
			animate('.6s .2s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
		])
	]);
}

// trigger('onloadAnimation', [
// 	transition('* => *', [

// 		// animation enter from bottom
// 		query('.enter-from-bottom', style({ opacity: 0, transform: 'translateY(10px)' })),
// 		query('.enter-from-bottom', stagger('100ms', [
// 			animate('1200ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
// 		])),

// 		// animation enter from top
// 		// query('.enter-from-top', style({ opacity: 0, transform: 'translateY(-20px)' })),
// 		// query('.enter-from-top', stagger('100ms', [
// 		// 	animate('1000ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
// 		// ])),

// 	])
// ])
