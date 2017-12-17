/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = (new class EventBus {
	constructor() {
		this.listeners = {};
	}

	on(event, listener) {
		this.listeners[event] = this.listeners[event] || [];
		this.listeners[event].push(listener);
		return listener;
	}

	emit(event, data) {
		this.listeners[event].forEach(listener => {
			listener(data);
		});
	}
}());

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuView_menuView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentView_contentView__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footerView_fooretView__ = __webpack_require__(4);






class ResumeView {
	constructor() {
		this.resume = document.createElement('div');
		this.resume.className = 'resume';

		this.makeResume();
	}

	makeResume() {
		const menu = new __WEBPACK_IMPORTED_MODULE_0__menuView_menuView__["default"]();
		const content = new __WEBPACK_IMPORTED_MODULE_1__contentView_contentView__["default"]();
		const footer = new __WEBPACK_IMPORTED_MODULE_2__footerView_fooretView__["default"]();

		this.resume.appendChild(menu.returnMenu());
		this.resume.appendChild(content.returnContent());
		this.resume.appendChild(footer.returnFooter());

		document.body.appendChild(this.resume);
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = ResumeView;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_eventBus__ = __webpack_require__(0);




class MenuView {
	constructor() {
		this.menu = document.createElement('ul');
		this.menu.classList.add('menu-main');

		this.bus = __WEBPACK_IMPORTED_MODULE_0__modules_eventBus__["default"];

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
		this.menu.onclick = event => {
			this.menuClick(event.target.parentNode);
		};

		this.menu.appendChild(this.main);
		this.menu.appendChild(this.about);
		this.menu.appendChild(this.project);
		this.menu.appendChild(this.skills);
	}

	menuClick(elem) {
		elem.classList.add('current');
		this.currentItem.classList.remove('current');
		this.currentItem = elem;
		let number = this.returnNumberMenu(this.currentItem);
		if (number) this.bus.emit('menuClick', number);
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
			default:
				return false;
		}
	}

	returnMenu() {
		return this.menu;
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = MenuView;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_eventBus__ = __webpack_require__(0);




class ContentView {
	constructor() {
		this.content = document.createElement('div');
		this.content.className = 'content';

		this.bus = __WEBPACK_IMPORTED_MODULE_0__modules_eventBus__["default"];
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
		this.offset = this.slideCount-- * this.height;
		this.slides.setAttribute('height', this.offset);
		this.offset = 0;

		this.bus.on('menuClick', numberMenu => {
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

	makeSlide2() {
		this.aboutInfo = document.createElement('div');
		this.aboutInfo.classList.add('slide2_about');
		this.aboutInfo.innerHTML = "<p>Мир не стоит на месте, и сейчас как никогда требуются специалисты, которые способны идти в ногу со временем. Мы уже не можем представить свою жизнь без огромного количества визуальной информации, которая поступает к нам отовсюду. Поэтому я твердо решил стать frontend разработчиком, и связать с программированием свою жизнь.</p>" + "<hr class='slide2_hr'>" + "<p>Сейчас я учусь на 4 курсе кафедры ИУ4. Планирую поступать в магистратуру. Но не смотря на занятость в университете, готов посвящать стажировке 20-26 часов в неделю, так как понимаю, что это бесценный опыт, который так мне сейчас необходим.</p>" + "<hr class='slide2_hr'>" + "<p>Моими преимуществами как сотрудника можно назвать невероятную целеустремленность, умение всецело отдаваться поставленным задачам, коммуникабельность и дипломатичность, желание постоянно узнавать что-то новое и стремление к профессиональному развитию.</p>" + "<hr class='slide2_hr'>" + "<p>Серьезно увлекаться программированием я начал на открытых курсах Технопарка по С/С++. Уже тогда я понял, что это именно то, чем я хочу заниматься и что мне интересно. Затем я поступил на основную программу Технопарка и сейчас учусь на втором семестре.</p>";

		this.slide2.appendChild(this.aboutInfo);
	}

	makeSlide3() {
		this.project = document.createElement('div');
		this.project.classList.add('slide3_project');
		this.project.setAttribute('hidden', 'true');
		this.project.innerHTML = "<p>Space Traveler: космическая игра-аркада, итоговый проект на открытых курсах по С/С++. Игроку предстоит пролететь сквозь пояс астероидов, не разбив свой космический корабль.</p><br>" + "<a href='https://github.com/AndersRichter/Space-Traveler'>GitHub Repositorie</a>" + "<br><hr class='slide2_hr'><br>" + "<p>Gardians Game: пошаговая настольная 3D игра в стиле фильма Стражи галактики. Играя за персонажей фильма нужно захватить как можно больше фигур противника.</p><br>" + "<a href='https://github.com/AndersRichter/2017_2_Chunk'>GitHub Repositorie</a>";

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
		this.slide4.innerHTML = "<p class='slide4_text'>Hello</p>";
	}

	returnContent() {
		return this.content;
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = ContentView;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


class FooterView {
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
	}

	returnFooter() {
		return this.footer;
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = FooterView;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(6));
requireAll(__webpack_require__(8));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.js": 7,
	"./modules/eventBus.js": 0,
	"./view/contentView/contentView.js": 3,
	"./view/footerView/fooretView.js": 4,
	"./view/menuView/menuView.js": 2,
	"./view/resumeView/resumeView.js": 1
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_resumeView_resumeView_js__ = __webpack_require__(1);




const resumeView = new __WEBPACK_IMPORTED_MODULE_0__view_resumeView_resumeView_js__["default"]();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.css": 9,
	"./view/contentView/contentView.css": 10,
	"./view/footerView/fooretView.css": 11,
	"./view/menuView/menuView.css": 12,
	"./view/resumeView/resumeView.css": 13
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);