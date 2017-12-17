'use strict';

export default new class EventBus {
	constructor() {
		this.listeners = {};
	}

	on(event, listener) {
		this.listeners[event] = this.listeners[event] || [];
		this.listeners[event].push(listener);
		return listener
	}

	emit(event, data) {
		this.listeners[event].forEach((listener) => {
			listener(data);
		});
	}
}();

