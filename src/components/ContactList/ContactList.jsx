import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from 'store/operations';
import { ContactsListStyle, Loader } from './ContactList.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  const loader = useSelector(state => state.contacts.isLoading);

  const isUserExist = useSelector(state => Boolean(state.auth.user.email));

  useEffect(() => {
    if (isUserExist) dispatch(fetchContacts());
  }, [dispatch, isUserExist]);

  const contacts = useSelector(state => state.contacts.items);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactsListStyle>
        {loader && (
          <Loader>
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="#1e1823"
              visible={true}
            />
          </Loader>
        )}
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact}></ContactItem>
        ))}
      </ContactsListStyle>
    </>
  );
}
