import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';

export const CustomMainArticleContainer = styled(Container)`
  /* border: 1px solid red; */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items:center;
  `;

export const BGHeader = styled('div')`
  img {
    position: relative;
  }
  img:first-of-type {
      top: -65px;
      left: -43px;
      z-index: -3;
    }
  img:last-child {
    left: -218px;
    z-index: -2;
  }
`;

export const CustomTypography = styled(Typography)`
  position: relative;
  top: -171.5px;
  left: 32px;
  max-width: 300px;
  margin:0;
  padding: 0;
  z-index: -1;
`;

export const CustomBody = styled('div')`
  width: 330px;
  height: 328px;
  padding: 0;
  height: 328px;
  position: relative;
  top: -150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
`;
