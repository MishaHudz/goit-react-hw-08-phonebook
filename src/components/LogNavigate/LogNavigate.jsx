import MediaQuery from 'react-responsive';
import { LogMobileNavLink, LogNavLink, LogNavList } from './LogNavigate.styles';

import LogInIcon from '../../images/login.png';
import RegistrationIcon from '../../images/registration.png';

function LogNavigate() {
  return (
    <>
      <LogNavList>
        <MediaQuery maxWidth={767}>
          <li>
            <LogMobileNavLink to="/register">
              <img src={RegistrationIcon} alt="" width="20" />
            </LogMobileNavLink>
          </li>
          <li>
            <LogMobileNavLink to="/login">
              <img src={LogInIcon} alt="" width="20" />
            </LogMobileNavLink>
          </li>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <li>
            <LogNavLink to="/register">Registration</LogNavLink>
          </li>
          <li>
            <LogNavLink to="/login">Log in</LogNavLink>
          </li>
        </MediaQuery>
      </LogNavList>
    </>
  );
}

export default LogNavigate;
