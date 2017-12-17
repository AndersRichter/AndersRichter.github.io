'use strict';

import EventBus from '../../modules/eventBus';

export default class ContentView {
	constructor() {
		this.content = document.createElement('div');
		this.content.className = 'slider';

		this.bus = EventBus;
		this.currentElem = 1;

		this.width = 1000;
		this.height = 500;
		this.i = 4;
		this.offset = this.i*this.height;
		this.i--;

		this.makeContent();
	}

	makeContent() {
		this.slides = document.createElement('div');
		this.slide1 = document.createElement('div');
		this.slide2 = document.createElement('div');
		this.slide3 = document.createElement('div');
		this.slide4 = document.createElement('div');

		this.slides.classList.add('slides');
		this.slide1.classList.add('slide1');
		this.slide2.classList.add('slide2');
		this.slide3.classList.add('slide3');
		this.slide4.classList.add('slide4');

		this.slide1.classList.add('slide');
		this.slide2.classList.add('slide');
		this.slide3.classList.add('slide');
		this.slide4.classList.add('slide');

		this.slides.appendChild(this.slide1);
		this.slides.appendChild(this.slide2);
		this.slides.appendChild(this.slide3);
		this.slides.appendChild(this.slide4);

		this.content.appendChild(this.slides);

		this.slides.setAttribute('height', this.offset);
		this.offset = 0;

		this.bus.on('menuClick', (a) => {
			this.height = this.content.offsetHeight;
			this.offset += this.height * (a - this.currentElem);
			this.slides.style.transform = 'translateY(-' + `${this.offset}` + 'px)';
			this.currentElem = a;
		});

		console.log('make Content');
	}

	returnContent() {
		return this.content;
	}
}