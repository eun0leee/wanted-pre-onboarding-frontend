import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <Container>
      <Button to={'/signin'}>로그인</Button>
      <Button to={'/signup'}>회원가입</Button>
    </Container>
  );
};
export default Main;

const Container = styled.main``;

const Button = styled(Link)`
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.green_main};
`;
