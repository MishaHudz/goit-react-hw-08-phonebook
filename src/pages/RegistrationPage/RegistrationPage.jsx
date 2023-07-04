import { useState } from 'react';
import {
  RegistrationForm,
  RegistrationFormLabel,
  RegistrationPageInput,
  RegistrationSection,
} from './RegistrationPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { registrateUser } from 'store/operations';
import { LogInBtn } from 'pages/LogInPage/LogInPage.styles';

function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      name,
      email,
      password,
    };
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
            type="password"
            required
            name="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </RegistrationFormLabel>
        {errorMessage.registration && <p>This user already exist</p>}
        <LogInBtn>Registration</LogInBtn>
      </RegistrationForm>
    </RegistrationSection>
  );
}

export default RegistrationPage;
