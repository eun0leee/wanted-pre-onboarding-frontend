import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from 'src/api/api';
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === 'Sign Up') {
      const response = await signup(email, password);
      if (response.status === 400) {
        confirm(response.data.message);
      } else {
        confirm('회원가입이 완료됐습니다.');
        navigate(moveto);
      }
    } else if (title === 'Login') {
      const response = await signin(email, password);
      if (response.status === 401) {
        confirm('이메일과 비밀번호를 다시 확인해주세요.');
      } else {
        localStorage.setItem('token', response.data.access_token);
        navigate(moveto);
      }
    }
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

    &:first-of-type {
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
