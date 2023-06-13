import 'react-toastify/dist/ReactToastify.css';
import { deleteContact, fetchContacts } from 'store/operations';
import {
  ContactsListStyle,
  ContactItem,
  Delete,
  Loader,
} from './ContactList.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export function ContactList() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  const loader = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactsListStyle>
        {filteredContacts.map(contact => (
          <ContactItem key={contact?.id}>
            {contact?.name} <span>{contact?.number} </span>
            <Delete onClick={() => dispatch(deleteContact(contact?.id))}>
              Delete
            </Delete>
          </ContactItem>
        ))}
      </ContactsListStyle>
      {loader && (
        <Loader>
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#fd9222"
            visible={true}
          />
        </Loader>
      )}
    </>
  );
}
