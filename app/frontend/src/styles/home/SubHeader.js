import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';

export const CustomTypografy = styled(Typography)`
strong {
  font-weight: 700;
  line-height: 160%;
}

span {
  color: #37ACA7;
  font-weight: 700;
  font-family: 'Libre Baskerville'
}
`;

export const CustomContainer = styled(Container)`
  display: flex;
  /* border: 1px solid red; */
  margin: 147px 20px 0 20px;
  width: 333px;
  height: 336.79px;
  padding: 0 50px 0  0;
  flex-direction: column;
  justify-content: space-between;

  img {
    border: 1px solid red;
  }
`;
