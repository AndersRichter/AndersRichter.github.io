'use strict';

import EventBus from '../../modules/eventBus';

export default class MenuView {
	constructor() {
		this.menu = document.createElement('ul');
		this.menu.classList.add('menu-main');

		this.bus = EventBus;

		this.makeMenu();
	}

	makeMenu() {
		this.main = document.createElement('li');
		this.about = document.createElement('li');
		this.project = document.createElement('li');
		this.skills = document.createElement('li');

		this.main.innerHTML = '<text>Главная</text>';
		this.about.innerHTML = '<text>Обо мне</text>';
		this.project.innerHTML = '<text>Проекты</text>';
		this.skills.innerHTML = '<text>Профессиональные навыки</text>';

		this.main.classList.add('current');
		this.main.classList.add('first');
		this.currentItem = this.main;
		this.menu.onclick = (event) => {
			this.menuClick(event.target.parentNode);
		};

		this.menu.appendChild(this.main);
		this.menu.appendChild(this.about);
		this.menu.appendChild(this.project);
		this.menu.appendChild(this.skills);
		console.log('make Menu');
	}

	menuClick(elem) {
		elem.classList.add('current');
		this.currentItem.classList.remove('current');
		this.currentItem = elem;
		this.bus.emit('menuClick', this.returnNumberMenu(this.currentItem));
	}

	returnNumberMenu(elem) {
		switch (elem.innerText) {
			case 'ГЛАВНАЯ':
				return 1;
			case 'ОБО МНЕ':
				return 2;
			case 'ПРОЕКТЫ':
				return 3;
			case 'ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ':
				return 4;
		}
	}

	returnMenu() {
		return this.menu;
	}
}