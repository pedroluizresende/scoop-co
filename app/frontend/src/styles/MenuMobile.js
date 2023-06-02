import styled from '@emotion/styled';
import { Button, MenuList } from '@mui/material';

export const MenuContainer = styled('main')`
  position: absolute;
  top:0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  z-index: 2;
`;

export const CloseMenu = styled(Button)`
    border:none;
  background: none;
  padding: 0;
  width: 55px;
  height: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 15px;
  z-index: 3;
  

  div {
    width: 28.64px;
    height: 2.5px;
    background-color: ${({ theme }) => theme.palette.white.main};
    position: relative;
    transform-origin: center center;
    transition: transform 0.3s;
    right: -5px;

    &:first-of-type {
      transform: rotate(45deg);
      bottom: -1.5px;
    }

    &:last-child {
      transform: rotate(-45deg);
      bottom: 0.1px;
    }
  }
`;

export const CustomMenuList = styled(MenuList)`
  margin: 137px 0 0 0;
  padding: 0;
  height: 276.55px;
  /* border: 1px solid red; */
  width: 239px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CustomMenuItem = styled('li')`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.white.main};
  margin: 0;
  padding: 0;
`;
