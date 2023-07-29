import styled from '@emotion/styled';

export const Container = styled.section`
  height: calc(100vh - 76px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PageTitle = styled.h2`
  margin-bottom: 100px;
  color: ${({ theme }) => theme.colors.green_main};
  font-size: 32px;
  font-weight: 700;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 40px;
  border-radius: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.green_main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_sub};
  }
`;
