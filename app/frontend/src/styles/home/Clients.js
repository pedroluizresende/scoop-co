import styled from '@emotion/styled';
import { Button, Container, makeStyles } from '@mui/material';

export const ClientsContainer = styled(Container)`
  margin: 108.8px 20px 0;
  width: 90%;
  padding: 0;

  h6 {
    letter-spacing: 0;
    margin-top: 24px;
  }
`;

export const ClientsCarouselContainer = styled(Container)`
  width: 100%;
  margin: 40px 0 0 0;
  padding: 0;

  img{
    filter: grayscale(100%);
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;

export const ButtonCarousel = styled(Button)`
  border-radius: 100%;
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.palette.background2.default};
  border: none;

  div {
    width: 18px;
    height: 18px;
  }
`;
