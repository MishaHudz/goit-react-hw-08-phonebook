import { useState } from 'react';
import {
  EditComponentForm,
  EditComponentLabel,
  EditFormButtonsList,
  EditFormInput,
  FormLeftPart,
} from './EditForm.styled';

import sendImage from '../../images/send-img.png';
import cancelImage from '../../images/cancel-circle.png';
import { ContactButton } from 'components/ContactItem/ContactItem.styled';
import {
  InputNumberMask,
  nameFildValidate,
} from 'components/ContactForm/ValidationForm';
import { useDispatch } from 'react-redux';
import { updateContact } from 'store/operations';
import { toast } from 'react-toastify';

export function EditForm({ setIsEditClick, contact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onEditSendBtnClick = evt => {
    evt.preventDefault();
    const newInfo = {};

    if (!name.trim() && !number.trim()) {
      toast.warn(`Input at least one fild!`);
      return;
    }

    if (number.includes('_')) {
      toast.warn(`Your number is incorrect!`);
      return;
    }

    if (!nameFildValidate(name) && name) {
      toast.warn(`Incorrect name`);
      return;
    }

    if (name.trim() && number.trim()) {
      newInfo.name = name;
      newInfo.number = number;
    }
    if (name.trim() && !number.trim()) {
      newInfo.name = name;
      newInfo.number = contact.number;
    }

    if (!name.trim() && number.trim()) {
      newInfo.name = contact.name;
      newInfo.number = number;
    }

    newInfo.id = contact.id;
    dispatch(updateContact(newInfo))
      .unwrap()
      .then(() => setIsEditClick(false));
  };

  const onLoadForm = () => {
    setTimeout(() => {
      InputNumberMask();
    }, 0);
  };

  return (
    <EditComponentForm onLoad={onLoadForm}>
      <FormLeftPart>
        <EditComponentLabel>
          Name:
          <EditFormInput
            type="text"
            value={name}
            onChange={evt => {
              setName(evt.target.value);
            }}
          />
        </EditComponentLabel>
        <EditComponentLabel>
          Number:
          <EditFormInput
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={evt => {
              setNumber(evt.target.value);
            }}
          />
        </EditComponentLabel>
      </FormLeftPart>

      <EditFormButtonsList>
        <li>
          <ContactButton type="button" onClick={() => setIsEditClick(false)}>
            <img src={cancelImage} alt="cross in a circle" width="20" />
          </ContactButton>
        </li>
        <li>
          <ContactButton onClick={evt => onEditSendBtnClick(evt)}>
            <img src={sendImage} alt="paper plane" width="20" />
          </ContactButton>
        </li>
      </EditFormButtonsList>
    </EditComponentForm>
  );
}
