import {
  popupButtonSignin, popupButtonSignup, inputSigninEmail, inputSigninPassword, inputSignupEmail, inputSignupPassword, inputSignupName, errorMessageSignup,
  errorMessageSignin,
} from '../constants/mainConst';

function validate(element) {
  if (!element.checkValidity()) {
    popupButtonSignin.setAttribute('disabled', true);
    popupButtonSignin.classList.remove('popup__button_active');
    popupButtonSignup.setAttribute('disabled', true);
    popupButtonSignup.classList.remove('popup__button_active');
  } if (inputSigninEmail.checkValidity() & inputSigninPassword.checkValidity()) {
    popupButtonSignin.removeAttribute('disabled');
    popupButtonSignin.classList.add('popup__button_active');
  } if (inputSignupEmail.checkValidity() & inputSignupPassword.checkValidity() & inputSignupName.checkValidity()) {
    popupButtonSignup.removeAttribute('disabled');
    popupButtonSignup.classList.add('popup__button_active');
  }
}

export function handleValidate(event) {
  validate(event.target);
  errorMessageSignup.classList.add('hidden');
  errorMessageSignin.classList.add('hidden');
}
