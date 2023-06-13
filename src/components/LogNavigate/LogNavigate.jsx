import { LogNavLink, LogNavList } from './LogNavigate.styles';
function LogNavigate() {
  return (
    <>
      <LogNavList>
        <li>
          <LogNavLink to="/register">Registration</LogNavLink>
        </li>
        <li>
          <LogNavLink to="/login">Log in</LogNavLink>
        </li>
      </LogNavList>
    </>
  );
}

export default LogNavigate;
