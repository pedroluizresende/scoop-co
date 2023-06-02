import styled from '@emotion/styled';
import { Card, CardContent, Container } from '@mui/material';

export const StaticsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  height: 622px;
  /* border: 1px solid red; */
  margin-bottom: 271px;
`;

export const CustomCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomCardContent = styled(CardContent)`
  padding: 0;
  /* border: 1px solid blue; */
  width: 202px;
  height: 154px;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: none;
  color: ${({ theme }) => theme.palette.terciary.main};
  align-items: center;
  display: flex;
  flex-direction: column;

  h2 {
      /* border: 1px solid green; */
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    line-height: 100%;
    margin-bottom: 24px;
    font-weight: 700;
    width: 100%;
  }

  h6 {
      /* border: 1px solid green; */
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    letter-spacing: 1.6px;
    width: 100%;
  }
`;

export const CustomDivider = styled('hr')`
  color: #5B5051;
  margin-top: 40px;
  width: 330px;
  height: 0px;
  border: 1px solid #5B5051;
  align-self: stretch;
`;
