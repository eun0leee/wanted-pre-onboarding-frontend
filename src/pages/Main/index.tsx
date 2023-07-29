import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container, Button, PageTitle } from '../../styles/styles';

const Main = () => {
  return (
    <Container>
      <Wrap>
        <LogoBox>
          <img src={logo} alt="나뭇잎 그림" />
          <PageTitle>Green Todo</PageTitle>
        </LogoBox>
        <ButtonBox>
          <Button>
            <Link to={'/signin'}>로그인</Link>
          </Button>
          <Button>
            <Link to={'/signup'}>회원가입</Link>
          </Button>
        </ButtonBox>
      </Wrap>
    </Container>
  );
};
export default Main;

const Wrap = styled.div`
  max-width: 700px;
`;

const LogoBox = styled.div`
  gap: 20px;
`;

const ButtonBox = styled.div`
  gap: 15px;
`;
