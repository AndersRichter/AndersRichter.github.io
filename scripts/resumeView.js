(function () {
	'use strict';

	class ResumeView {
		constructor() {
			this.mainDiv = document.createElement('div');
			this.mainDiv.className = "mainDiv";

			this.createBaseDiv();
		}

		createBaseDiv() {
			this.profileDiv = document.createElement('div');
			this.profileDiv.className = 'profileDiv';
			this.makeProfile();

			this.menuDiv = document.createElement('div');
			this.menuDiv.className = 'menuDiv';
			this.makeMenu();

			this.aboutDiv = document.createElement('div');
			this.aboutDiv.className = 'content';
			this.makeAbout();

			this.workDiv = document.createElement('div');
			this.workDiv.className = 'content';
			this.workDiv.innerHTML = 'Work Div';

			this.proffDiv = document.createElement('div');
			this.proffDiv.className = 'content';
			this.proffDiv.innerHTML = "Proff Div";

			this.mainDiv.appendChild(this.profileDiv);
			this.mainDiv.appendChild(this.menuDiv);
			this.mainDiv.appendChild(this.aboutDiv);
			this.mainDiv.appendChild(this.workDiv);
			this.mainDiv.appendChild(this.proffDiv);

			this.hide(this.workDiv);
			this.hide(this.proffDiv);

			document.body.appendChild(this.mainDiv);
		}

		makeMenu() {
			this.button1 = document.createElement('div');
			this.button1.className = 'button';
			this.button1.innerHTML = "Обо мне";

			this.button2 = document.createElement('div');
			this.button2.className = 'button';
			this.button2.innerHTML = "Опыт работы";

			this.button3 = document.createElement('div');
			this.button3.className = 'button';
			this.button3.innerHTML = "Профессиональные навыки";

			this.menuDiv.appendChild(this.button1);
			this.menuDiv.appendChild(this.button2);
			this.menuDiv.appendChild(this.button3);
			this.buttonOnclick();
		}

		makeProfile() {
			this.avatar = document.createElement('div');
			this.avatar.className = 'avatar';

			this.contacts = document.createElement('div');
			this.contacts.className = 'contacts';
			this.contacts.innerHTML =
				"<pre>" +
				"<h1>Савосин Андрей</h1>" +
				"<span class='cont'><strong>Email:   </strong>andreysav96@rambler.ru</span>" +
				"<br>" +
				"<span class='cont'><strong>Телефон: </strong>8-916-788-19-71</span>" +
				"<br>" +
				"<span class='cont'><strong>Github:  </strong><a href='https://github.com/AndersRichter'>AndersRichter</a></span>" +
				"</pre>";

			this.profileDiv.appendChild(this.avatar);
			this.profileDiv.appendChild(this.contacts);
		}

		makeAbout() {
			this.aboutDiv.innerHTML =
				"<pre>" +
				"<span class='cont'><strong>Цель: </strong> развиваться в области frontend разработки.</span>" +
				"<br>" +
				"<span class='cont'><strong>Образование: </strong> 4 курс кафедры ИУ4, в магистратуру поступать планирую.</span>" +
				"<br>" +
				"<span class='cont'><strong>Дополнительное образование: </strong> закончил открытые курсы по С/С++, сейчас на втором семестре Технопарка.\n" +
				"Стажировке смогу уделять от 20 до 26 часов в неделю.</span>" +
				"<br>" +
				"<span class='cont'><strong>Успехи и достижения: </strong> я горжусь тем, что закончил открытые курсы по С/С++ и затем поступил в Технопарк. На хакатоне был всего 1 раз, это был хакатон на языке Perl в рамках открытых курсов, я сделал чат бота Perl-doc.</span>" +
				"<br>" +
				"<span class='cont'><strong>Личные качества: </strong> я считаю, что моими главными качествами являются: доброжелательность, открытость, упорство и , самое главное, огромное желание развиваться, узнавать новое, не стоять на месте.</span>" +
				"</pre>" +
				"<progress value=\"50\" max=\"100\"></progress>\n";
		}

		buttonOnclick() {
			this.button1.onclick = () => {
				this.activeElem(this.button1);
				this.hide(this.workDiv);
				this.hide(this.proffDiv);
				this.show(this.aboutDiv);
			};

			this.button2.onclick = () => {
				this.activeElem(this.button2);
				this.hide(this.aboutDiv);
				this.hide(this.proffDiv);
				this.show(this.workDiv);
			};

			this.button3.onclick = () => {
				this.activeElem(this.button3);
				this.hide(this.workDiv);
				this.hide(this.aboutDiv);
				this.show(this.proffDiv);
			};
		}

		activeElem(elem) {
			this.button1.removeAttribute('style');
			this.button2.removeAttribute('style');
			this.button3.removeAttribute('style');

			elem.style.backgroundColor = 'gray';
			elem.style.color = 'white';
		}

		hide(elem) {
			elem.setAttribute('hidden', 'true');
		}

		show(elem) {
			elem.removeAttribute('hidden');
		}
	}

	window.ResumeView = ResumeView;
	
})();