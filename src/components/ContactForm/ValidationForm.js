import validator from 'validator';
import Inputmask from 'inputmask';

export function InputNumberMask() {
  const telInput = document.querySelector(`input[type='tel']`);
  if (telInput) {
    const telInputMask = new Inputmask(`+380(99) 999-99-99`);
    telInputMask.mask(telInput);
  }
}

export function nameFildValidate(name) {
  if (!validator.isAlpha(name, 'en-US', { ignore: ' ' }) || name.length < 2) {
    return false;
  }

  return true;
}
