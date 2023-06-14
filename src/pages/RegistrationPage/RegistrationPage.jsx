import { useState } from 'react';
import {
  RegistrationForm,
  RegistrationFormLabel,
  RegistrationSection,
} from './RegistrationPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { registrateUser } from 'store/operations';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      name,
      email,
      password,
    };
    dispatch(registrateUser(sendedObj))
      .unwrap()
      .then(() => navigate('/'));
  };

  return (
    <RegistrationSection>
      <h2>Registration page</h2>
      <RegistrationForm action="" onSubmit={onFormSubmit}>
        <RegistrationFormLabel>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </RegistrationFormLabel>
        <RegistrationFormLabel>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </RegistrationFormLabel>
        <RegistrationFormLabel>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </RegistrationFormLabel>
        {errorMessage && <p>This user already exist</p>}
        <button>Registration</button>
      </RegistrationForm>
    </RegistrationSection>
  );
}

export default RegistrationPage;
