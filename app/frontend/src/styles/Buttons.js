import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ArrowButton = styled(Button)`
  border: none;
  background: none;
  width: 41.79px;
`;

export const CustomButton = styled(Button)`
  width: 202px;
  height: 32px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 2px;
  padding: 8px, 24px;
  border-radius: 100px;
`;

export const UpButton = styled(Button)`
  box-shadow: none;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;
