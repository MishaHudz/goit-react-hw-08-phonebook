import MediaQuery from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import {
  AuthorizedUresContainer,
  LogOutBtn,
  UresPhoto,
} from './AuthorizedUser.styles';
import { logOutUser } from 'store/operations';

import LogOutImg from '../../images/log-out.png';

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
      <MediaQuery maxWidth={767}>
        <LogOutBtn type="button" onClick={onLogOutBtnClick}>
          <img src={LogOutImg} alt="Open door" width="20" height="20" />
        </LogOutBtn>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <p>{userName}</p>
        <LogOutBtn type="button" onClick={onLogOutBtnClick}>
          Log out
        </LogOutBtn>
      </MediaQuery>
    </AuthorizedUresContainer>
  );
}

export default AuthorizedUser;
