'use strict';

export default class ResumeView {
	constructor() {
		this.mainDiv = document.createElement('div');
		this.mainDiv.className = "mainDiv";

		this.createBaseDiv();
	}

	createBaseDiv() {
		this.profileDiv = document.createElement('div');
		this.profileDiv.className = 'profileDiv';

		this.menuDiv = document.createElement('div');
		this.menuDiv.className = 'menuDiv';

		this.aboutDiv = document.createElement('div');
		this.aboutDiv.className = 'aboutDiv';
		this.workDiv = document.createElement('div');
		this.workDiv.className = 'workDiv';
		this.proffDiv = document.createElement('div');
		this.proffDiv.className = 'proffDiv';

		this.mainDiv.appendChild(this.profileDiv);
		this.mainDiv.appendChild(this.menuDiv);
		this.mainDiv.appendChild(this.aboutDiv);
		this.mainDiv.appendChild(this.workDiv);
		this.mainDiv.appendChild(this.proffDiv);

		this.hide(this.workDiv);
		this.hide(this.proffDiv);
	}

	hide(elem) {
		elem.setAttribute('hidden', 'true');
	}

	show(elem) {
		elem.removeAttribute('hidden');
	}
}