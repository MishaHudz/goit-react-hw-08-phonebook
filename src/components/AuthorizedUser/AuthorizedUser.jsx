import { useSelector } from 'react-redux';
import { AuthorizedUresContainer, UresPhoto } from './AuthorizedUser.styles';

const defaultUserImg =
  'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=center';

function AuthorizedUser() {
  const userName = useSelector(state => state.auth.user.name);

  return (
    <AuthorizedUresContainer>
      <UresPhoto
        src={defaultUserImg}
        alt="default user"
        width="55px"
        height="55px"
      />
      <p>{userName}</p>
      <button type="button">Log out</button>
    </AuthorizedUresContainer>
  );
}

export default AuthorizedUser;
