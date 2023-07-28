import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAuth {
  moveto: string;
  btnName: string;
}

const Auth = ({ moveto, btnName }: IAuth) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(moveto);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          data-testid="email-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-testid="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          data-testid="signup-button"
          type="submit"
          disabled={!isEmailValid || !isPasswordValid}
        >
          {btnName}
        </button>
      </Form>
    </Container>
  );
};
export default Auth;

const Container = styled.main``;

const Form = styled.form`
  width: 800px;
  display: flex;
  flex-direction: column;
`;
