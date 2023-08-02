import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import {
  RegistrationForm,
  RegistrationFormLabel,
  RegistrationPageInput,
  RegistrationSection,
} from './RegistrationPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { registrateUser } from 'store/operations';
import { LogInBtn } from 'pages/LogInPage/LogInPage.styles';

let PASSWORD_FILD_COLOR = 'white';

function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onPasswordFildChange = value => {
    setPassword(value.trim());

    if (value.trim().length < 7) {
      PASSWORD_FILD_COLOR = '#fd9222';
      return;
    }
    PASSWORD_FILD_COLOR = 'white';
  };

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      name,
      email,
      password,
    };

    if (password.length < 7) {
      toast.error(`Password must contain at least 7 characters!`);
      return;
    }

    dispatch(registrateUser(sendedObj));
  };

  return (
    <RegistrationSection>
      <RegistrationForm action="" onSubmit={onFormSubmit}>
        <RegistrationFormLabel>
          Name
          <RegistrationPageInput
            type="text"
            name="name"
            required
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </RegistrationFormLabel>
        <RegistrationFormLabel>
          Email
          <RegistrationPageInput
            type="email"
            required
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </RegistrationFormLabel>
        <RegistrationFormLabel>
          Password
          <RegistrationPageInput
            style={{ color: PASSWORD_FILD_COLOR }}
            type="password"
            required
            name="password"
            value={password}
            onChange={({ target: { value } }) => onPasswordFildChange(value)}
          />
        </RegistrationFormLabel>
        {errorMessage.registration && <p>This user already exist</p>}
        <LogInBtn>Registration</LogInBtn>
      </RegistrationForm>
      <ToastContainer />
    </RegistrationSection>
  );
}

export default RegistrationPage;
