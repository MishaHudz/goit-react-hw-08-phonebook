import validator from 'validator';
import Inputmask from 'inputmask';

export function InputNumberMask() {
  const telInput = document.querySelectorAll(`input[type='tel']`);

  if (telInput && telInput.length) {
    const telInputMask = new Inputmask(`+380(99) 999-99-99`);

    telInput.forEach(input => telInputMask.mask(input));
  }
}

export function nameFildValidate(name) {
  if (!validator.isAlpha(name, 'en-US', { ignore: ' ' }) || name.length < 2) {
    return false;
  }

  return true;
}
