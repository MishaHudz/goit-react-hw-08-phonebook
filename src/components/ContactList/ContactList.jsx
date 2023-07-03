import 'react-toastify/dist/ReactToastify.css';
import { deleteContact, fetchContacts } from 'store/operations';
import {
  ContactsListStyle,
  ContactItem,
  Delete,
  Loader,
  ContactContainer,
  NumberInfo,
  DinamickNameInfo,
  DinamickNameInfoContainer,
  NumberContaoner,
} from './ContactList.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

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
        {filteredContacts.map(contact => (
          <ContactItem key={contact?.id}>
            <ContactContainer>
              <NumberInfo>
                Name:
                <DinamickNameInfoContainer>
                  <DinamickNameInfo>{contact?.name}</DinamickNameInfo>
                </DinamickNameInfoContainer>
              </NumberInfo>
              <NumberInfo>
                Number: <NumberContaoner>{contact?.number}</NumberContaoner>
              </NumberInfo>
            </ContactContainer>
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
