import { useState } from 'react';
import { LogInForm, LogInFormLabel, LogInSection } from './LogInPage.styles';
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
      <h2>Log in page</h2>
      <LogInForm action="" onSubmit={onFormSubmit}>
        <LogInFormLabel>
          Email
          <input
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </LogInFormLabel>
        <LogInFormLabel>
          Password
          <input
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </LogInFormLabel>
        {errorMessage && <p>Incorrect email or password</p>}
        <button>Log in</button>
      </LogInForm>
    </LogInSection>
  );
}

export default LogInPage;
