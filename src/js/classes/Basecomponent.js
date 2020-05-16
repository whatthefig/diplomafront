export class Basecomponent {
  constructor() {
    this._listeners = [];
  }

  _setListeners(listeners) {
    listeners.foreach((listener) => this._addListener(...listener));
  }

  _addListener(element, event, callback) {
    element.addEventListener(event, callbcak);
    this._listeners.push({
      element, event, callback,
    });
  }

  _clearListeners() {
    this._listeners.forEach(({
      element, event, callback,
    }) => {
      element.removeEventListener(event, callback);
    });
  }
}
