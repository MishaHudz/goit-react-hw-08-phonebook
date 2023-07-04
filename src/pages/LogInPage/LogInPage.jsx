import { useState } from 'react';
import {
  LogInBtn,
  LogInForm,
  LogInFormLabel,
  LogInPageInput,
  LogInSection,
} from './LogInPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/operations';

function LogInPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      email,
      password,
    };
    dispatch(loginUser(sendedObj));
  };

  return (
    <LogInSection>
      <LogInForm onSubmit={onFormSubmit}>
        <LogInFormLabel>
          Email
          <LogInPageInput
            type="email"
            value={email}
            required
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </LogInFormLabel>
        <LogInFormLabel>
          Password
          <LogInPageInput
            type="password"
            value={password}
            required
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </LogInFormLabel>
        {errorMessage.login && <p>Incorrect email or password!</p>}
        <LogInBtn>Log in</LogInBtn>
      </LogInForm>
    </LogInSection>
  );
}

export default LogInPage;
