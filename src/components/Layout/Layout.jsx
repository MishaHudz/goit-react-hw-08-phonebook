import { Outlet } from 'react-router-dom';
import { Header, Main } from './Layout.styles';

import LogNavigate from 'components/LogNavigate/LogNavigate';
import MainNavigate from 'components/MainNav/MainNav';
import AuthorizedUser from 'components/AuthorizedUser/AuthorizedUser';
import { useSelector } from 'react-redux';

function Layout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Header>
        <MainNavigate />
        {isLoggedIn && <AuthorizedUser />}
        {!isLoggedIn && <LogNavigate />}
      </Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
