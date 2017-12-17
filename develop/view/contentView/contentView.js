'use strict';

import EventBus from '../../modules/eventBus';

export default class ContentView {
	constructor() {
		this.content = document.createElement('div');
		this.content.className = 'content';

		this.bus = EventBus;
		this.currentElem = 1;

		this.makeContent();
		this.slideContent();
	}

	makeContent() {
		this.slides = document.createElement('div');
		this.slide1 = document.createElement('div');
		this.slide2 = document.createElement('div');
		this.slide3 = document.createElement('div');
		this.slide4 = document.createElement('div');

		this.slides.classList.add('slides');
		this.slide1.classList.add('slide1', 'slide');
		this.slide2.classList.add('slide2', 'slide');
		this.slide3.classList.add('slide3', 'slide');
		this.slide4.classList.add('slide4', 'slide');

		this.makeSlide2();
		this.makeSlide3();
		this.makeSlide4();

		this.slides.appendChild(this.slide1);
		this.slides.appendChild(this.slide2);
		this.slides.appendChild(this.slide3);
		this.slides.appendChild(this.slide4);

		this.content.appendChild(this.slides);
	}

	slideContent() {
		this.slideCount = 4;
		this.offset = this.slideCount--*this.height;
		this.slides.setAttribute('height', this.offset);
		this.offset = 0;

		this.bus.on('menuClick', (numberMenu) => {
			this.height = this.content.offsetHeight;
			this.offset += this.height * (numberMenu - this.currentElem);
			this.slides.style.transform = 'translateY(-' + `${this.offset}` + 'px)';
			this.currentElem = numberMenu;
			if (this.currentElem === 3) {
				setTimeout(this._blur.bind(this), 1100);
			} else {
				this.un_Blur();
			}
		});
	}

	makeSlide2(){
		this.aboutInfo = document.createElement('div');
		this.aboutInfo.classList.add('slide2_about');
		this.aboutInfo.innerHTML =
			"<p>Мир не стоит на месте, и сейчас как никогда требуются специалисты, которые способны идти в ногу со временем. Мы уже не можем представить свою жизнь без огромного количества визуальной информации, которая поступает к нам отовсюду. Поэтому я твердо решил стать frontend разработчиком, и связать с программированием свою жизнь.</p>" +
			"<hr class='slide2_hr'>" +
			"<p>Сейчас я учусь на 4 курсе кафедры ИУ4. Планирую поступать в магистратуру. Но не смотря на занятость в университете, готов посвящать стажировке 20-26 часов в неделю, так как понимаю, что это бесценный опыт, который так мне сейчас необходим.</p>" +
			"<hr class='slide2_hr'>" +
			"<p>Моими преимуществами как сотрудника можно назвать невероятную целеустремленность, умение всецело отдаваться поставленным задачам, коммуникабельность и дипломатичность, желание постоянно узнавать что-то новое и стремление к профессиональному развитию.</p>" +
			"<hr class='slide2_hr'>" +
			"<p>Серьезно увлекаться программированием я начал на открытых курсах Технопарка по С/С++. Уже тогда я понял, что это именно то, чем я хочу заниматься и что мне интересно. Затем я поступил на основную программу Технопарка и сейчас учусь на втором семестре.</p>";

		this.slide2.appendChild(this.aboutInfo);
	}

	makeSlide3() {
		this.project = document.createElement('div');
		this.project.classList.add('slide3_project');
		this.project.setAttribute('hidden', 'true');
		this.project.innerHTML =
			"<p>Space Traveler: космическая игра-аркада, итоговый проект на открытых курсах по С/С++. Игроку предстоит пролететь сквозь пояс астероидов, не разбив свой космический корабль.</p><br>" +
			"<a href='https://github.com/AndersRichter/Space-Traveler'>GitHub Repositorie</a>" +
			"<br><hr class='slide2_hr'><br>" +
			"<p>Gardians Game: пошаговая настольная 3D игра в стиле фильма Стражи галактики. Играя за персонажей фильма нужно захватить как можно больше фигур противника.</p><br>" +
			"<a href='https://github.com/AndersRichter/2017_2_Chunk'>GitHub Repositorie</a>";

		this.blure = document.createElement('div');
		this.blure.classList.add('slide3_blur');

		this.slide3.appendChild(this.project);
		this.slide3.appendChild(this.blure);
	}

	_blur() {
		this.blure.style.filter = 'blur(10px)';
		this.project.removeAttribute('hidden');
	}

	un_Blur() {
		this.project.setAttribute('hidden', 'true');
		this.blure.style.filter = 'blur(0px)';
	}

	makeSlide4() {
		this.slide4.innerHTML =
			"<p class='slide4_text'>Hello</p>";
	}

	returnContent() {
		return this.content;
	}
}