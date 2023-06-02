import styled from '@emotion/styled';
import { Button, Container } from '@mui/material';

export const ProjectsContainer = styled(Container)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white.main};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  justify-content: space-between;

  header {
    width: 287px;
    height: 118px;
    margin-top: 80px;
    padding-left: 20px;

    h3 {
      color: ${({ theme }) => theme.palette.black.main};
      width: 267px;
      height: 64px;
      line-height: 100%;
    }
    p {
      margin: 10px 0 0 0;
      width: 267px;
      line-height: 140%;
    }
  }
`;

export const CarouselContainer = styled(Container)`
  /* border: 1px solid green; */
  width: 100%;
  padding: 0;
  margin-top: 55px;

  div:first-of-type {
    width: 375px;
    height: 200px;
  }
`;

export const CarouselButtons = styled(Button)`
  width: 50%;
  height: 86.2px;
  box-shadow: none;
  border-radius: 0;

  :first-of-type:disabled {
    opacity: calc(50%);
    background-color: ${({ theme }) => theme.palette.success.main}
  }
  :last-of-type:disabled{
    opacity: calc(50%);
    background-color: ${({ theme }) => theme.palette.primary.main}
  }
`;

export const TextContent = styled(Container)`
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 40px 20px;
  height: auto;

  h6 {
    margin-top: 16px;
    line-height: 120%;
  }
`;
