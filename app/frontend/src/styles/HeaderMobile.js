import styled from '@emotion/styled';

export const HeaderMobileContainer = styled('header')`
  position: fixed;
  top: 0%;
  width: 100%;
  height: 95px;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  justify-content: space-between;
  z-index: 10;
`;

export const LogoHorizontal = styled('img')`
  width: 158px;
  height: 21px;
`;

export const MenuButton = styled.button`
  border:none;
  background: none;
  padding: 0;
  width: 55px;
  height: 21px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 30px;
  z-index: 1;

  div {
    width: 100%;
    height:  2.5px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const TalkButton = styled('button')`
  width: 239px;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 100px;
  text-transform: uppercase;
  border: none;

  color: #F6FAEF;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Manrope'

`;
