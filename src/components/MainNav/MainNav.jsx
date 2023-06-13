import { MainNavLink, MainNavList } from './MainNav.styles';

function MainNavigate() {
  return (
    <>
      <MainNavList>
        <li>
          <MainNavLink to="/">Home page</MainNavLink>
        </li>
        <li>
          <MainNavLink to="/contacts">Contacts</MainNavLink>
        </li>
      </MainNavList>
    </>
  );
}

export default MainNavigate;
