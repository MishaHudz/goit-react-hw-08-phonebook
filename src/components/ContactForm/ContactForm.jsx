import { useState } from 'react';
import {
  FormStyles,
  ContactButton,
  Input,
  FormLabel,
  ErrorMessage,
} from './ContactForm.styles';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'store/operations';
import { toast } from 'react-toastify';
import { InputNumberMask, nameFildValidate } from './ValidationForm';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const users = useSelector(state => state.contacts.items);
  const errorFild = useSelector(state => state.contacts.error);

  const onSubmitForm = evt => {
    evt.preventDefault();

    if (number.includes('_')) {
      toast.warn(`Your number is incorrect!`);
      return;
    }

    if (!nameFildValidate(name)) {
      toast.warn(`Incorrect name`);
      return;
    }

    const sameName = users.filter(
      user => user.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName.length === 0) {
      dispatch(addContact({ name, number }));
      resetInputs();
    } else toast.warn(`${name} is already in contacts`);
  };

  const resetInputs = () => {
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);

        break;

      case 'number':
        setNumber(value);

        break;

      default:
        break;
    }
  };

  return (
    <FormStyles onSubmit={onSubmitForm}>
      <FormLabel onLoad={InputNumberMask()}>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          // placeholder="123-45-678"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </FormLabel>
      {errorFild && <ErrorMessage>Oops! Something went wrong.</ErrorMessage>}
      <ContactButton>Add contact</ContactButton>
    </FormStyles>
  );
}
