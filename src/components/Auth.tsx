import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, PageTitle } from '../styles/styles';

interface IAuth {
  title: string;
  moveto: string;
  btnName: string;
}

const Auth = ({ title, moveto, btnName }: IAuth) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === 'Sign Up') {
      confirm('로그인 페이지로 이동합니다.');
    }

    navigate(moveto);
  };

  return (
    <Container>
      <PageTitle>{title}</PageTitle>
      <Form onSubmit={handleSubmit}>
        <input
          data-testid="email-input"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          data-testid="signup-button"
          type="submit"
          className="btn-disabled"
          disabled={!isEmailValid || !isPasswordValid}
        >
          {btnName}
        </Button>
      </Form>
    </Container>
  );
};
export default Auth;

const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex-direction: column;

  input {
    padding: 12px 16px;
    line-height: 1.2;
    border: 1px solid #e0e0e0;
    color: #757575;

    &:first-child {
      border-bottom: none;
    }
  }

  .btn-disabled {
    margin-top: 50px;
    &:disabled {
      background-color: #bab8b8;

      &:hover {
        background-color: #bab8b8;
      }
    }
  }
`;
