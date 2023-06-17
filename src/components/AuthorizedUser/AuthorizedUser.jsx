import { useDispatch, useSelector } from 'react-redux';
import {
  AuthorizedUresContainer,
  LogOutBtn,
  UresPhoto,
} from './AuthorizedUser.styles';
import { logOutUser } from 'store/operations';

const defaultUserImg =
  'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=center';

function AuthorizedUser() {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const onLogOutBtnClick = () => {
    dispatch(logOutUser());
  };

  return (
    <AuthorizedUresContainer>
      <UresPhoto
        src={defaultUserImg}
        alt="default user"
        width="55px"
        height="55px"
      />
      <p>{userName}</p>
      <LogOutBtn type="button" onClick={onLogOutBtnClick}>
        Log out
      </LogOutBtn>
    </AuthorizedUresContainer>
  );
}

export default AuthorizedUser;
