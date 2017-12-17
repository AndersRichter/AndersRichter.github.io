'use strict';

import MenuView from '../menuView/menuView';
import ContentView from '../contentView/contentView';
import FooterView from '../footerView/fooretView';

export default class ResumeView {
	constructor() {
		this.resume = document.createElement('div');
		this.resume.className = 'resume';

		this.makeResume();
	}

	makeResume() {
		const menu = new MenuView();
		const content = new ContentView();
		const footer = new FooterView();

		this.resume.appendChild(menu.returnMenu());
		this.resume.appendChild(content.returnContent());
		this.resume.appendChild(footer.returnFooter());

		document.body.appendChild(this.resume);
	}
}