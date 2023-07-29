import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header>
        <div>
          <h1>Green Todo</h1>
        </div>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

const Header = styled.header`
  margin: 0 auto;
  height: 76px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.green_main};

  div {
    display: flex;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 15px 0;
    height: 76px;
  }
`;
