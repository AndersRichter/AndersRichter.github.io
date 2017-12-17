'use strict';

export default class FooterView {
	constructor() {
		this.footer = document.createElement('footer');

		this.makeFooter();
	}

	makeFooter() {
		this.contacts = document.createElement('ul');

		this.tel = document.createElement('li');
		this.email = document.createElement('li');
		this.git = document.createElement('li');
		this.vk = document.createElement('li');

		this.tel.classList.add('first');

		this.tel.innerHTML = '<text>Tel: 8-916-788-19-71</text>';
		this.email.innerHTML = '<text>Email: andreysav96@rambler.ru</text>';
		this.git.innerHTML = '<text><a href="https://github.com/AndersRichter">GitHub</a></text>';
		this.vk.innerHTML = '<text><a href="https://vk.com/andreyrichter">VK.com</a></text>';

		this.contacts.appendChild(this.tel);
		this.contacts.appendChild(this.email);
		this.contacts.appendChild(this.git);
		this.contacts.appendChild(this.vk);

		this.footer.appendChild(this.contacts);
		console.log('make Menu');
	}

	returnFooter() {
		return this.footer;
	}
}