import {
  signupForm, signinForm, errorMessageSignup, popupButtonSignin, popupButtonSignup, errorMessageSignin,
} from '../constants/mainConst';

export class Popup {
  constructor(container, showPopup, hidePopup) {
    this.container = container;
    this.showPopup = showPopup;
    this.hidePopup = hidePopup;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.showPopup.addEventListener('click', this.open);
    this.hidePopup.addEventListener('click', this.close);
  }

  open() {
    this.container.classList.remove('hidden');
  }

  close() {
    this.container.classList.add('hidden');
    signupForm.reset();
    signinForm.reset();
    errorMessageSignin.classList.add('hidden');
    errorMessageSignup.classList.add('hidden');
    popupButtonSignin.setAttribute('disabled', true);
    popupButtonSignin.classList.remove('popup__button_active');
    popupButtonSignup.setAttribute('disabled', true);
    popupButtonSignup.classList.remove('popup__button_active');
  }
}
