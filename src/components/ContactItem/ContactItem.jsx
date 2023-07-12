import { useDispatch } from 'react-redux';
import {
  ButtonList,
  ContactButton,
  ContactContainer,
  ContactItemLi,
  DinamickNameInfo,
  DinamickNameInfoContainer,
  NumberContainer,
  NumberInfo,
} from './ContactItem.styled';
import { deleteContact } from 'store/operations';

import deleteImage from '../../images/delete.png';
import editImage from '../../images/edit.png';
import { useState } from 'react';
import { EditForm } from 'components/EditForm/EditForm';

export function ContactItem({ contact }) {
  const [isEditClick, setIsEditClick] = useState(false);

  const dispatch = useDispatch();

  const onEditButtonClick = () => {
    setIsEditClick(true);
  };

  return (
    <ContactItemLi>
      {isEditClick ? (
        <EditForm setIsEditClick={setIsEditClick} contact={contact} />
      ) : (
        <>
          <ContactContainer>
            <NumberInfo>
              Name:
              <DinamickNameInfoContainer>
                <DinamickNameInfo>{contact?.name}</DinamickNameInfo>
              </DinamickNameInfoContainer>
            </NumberInfo>
            <NumberInfo>
              Number: <NumberContainer>{contact?.number}</NumberContainer>
            </NumberInfo>
          </ContactContainer>
          <ButtonList>
            <li>
              <ContactButton
                onClick={() => dispatch(deleteContact(contact?.id))}
              >
                <img src={deleteImage} alt="garbage bin" width="20" />
              </ContactButton>
            </li>
            <li>
              <ContactButton onClick={onEditButtonClick}>
                <img src={editImage} alt="pen" width="20" />
              </ContactButton>
            </li>
          </ButtonList>
        </>
      )}
    </ContactItemLi>
  );
}
