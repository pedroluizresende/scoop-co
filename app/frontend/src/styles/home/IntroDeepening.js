import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const IntroDeepeningContainer = styled(Container)`
  width: 100%;
  height: 957px;
  background-color: ${({ theme }) => theme.palette.background2.default};
  z-index: -1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const BgImages = styled('div')`
  img {
    position: absolute;
  }

  img:first-of-type {
    height: 155.15px;
    left: -80px;
    margin-top: -160px;
    z-index: -3
  }
  img:nth-of-type(2){
    width: 335px;
    height: 319px;
    margin-top: -211px;
    left: -9px;
    z-index: -2
  }
  img:nth-of-type(3) {
    margin-top: 12px;
    left: 55px;
    z-index: -1
  }
  img:nth-of-type(4) {
    margin-top: 12px;
    margin-top: -193px;
    right: 0;
    z-index: -1;
  }
  img:nth-of-type(5) {
    margin-top: 12px;
    margin-top: -205px;
    right: 0;
    z-index: -1;
  }
`;

export const TextContainer = styled('div')`
  width: 336px;
  height: 572px;
  margin-top: 226px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    width: 302px;
    height: 174px;
    /* border: 1px solid blue; */
    line-height: 120%;
    font-size: 48px;
  }

  p {
    font-weight: 400;
    line-height: 160%;
  }
`;
