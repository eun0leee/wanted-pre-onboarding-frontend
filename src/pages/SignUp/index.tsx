import styled from '@emotion/styled';
import Auth from 'src/components/Auth';

const SignUp = () => {
  return (
    <Container>
      <Auth moveto="/signin" btnName="회원가입" />
    </Container>
  );
};
export default SignUp;

const Container = styled.main``;
