import styled from '@emotion/styled';
import Auth from 'src/components/Auth';

const SignIn = () => {
  return (
    <Container>
      <Auth moveto="/todo" btnName="로그인" />
    </Container>
  );
};
export default SignIn;

const Container = styled.main``;
