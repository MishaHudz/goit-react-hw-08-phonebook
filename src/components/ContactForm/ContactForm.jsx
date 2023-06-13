import { useState } from 'react';
import {
  FormStyles,
  ContactButton,
  Input,
  FormLabel,
  ErrorMessage,
} from './ContactForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { customAlphabet } from 'nanoid';
import { addContact } from 'store/operations';
import { toast } from 'react-toastify';

const nanoid = customAlphabet('1234567890', 10);

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const users = useSelector(state => state.contacts.items);
  const errorFild = useSelector(state => state.contacts.error);

  const onSubmitForm = evt => {
    evt.preventDefault();

    const sameName = users.filter(
      user => user.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName.length === 0) {
      dispatch(addContact({ name, number, id: nanoid() }));
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
      <FormLabel>
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
