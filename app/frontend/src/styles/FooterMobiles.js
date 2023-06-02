import styled from '@emotion/styled';
import { MenuList, TextField } from '@mui/material';

export const FooterMobileContainer = styled('footer')`
  padding: 40px 20px;
  width: 100%;
  height: 1204.34px;
  position: relative;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.background.default};

  h6 {
    width: 292px;
    height: 48px;
    font-size: 24px;
    line-height: 100%;
    font-weight: 300;
  }

  header {
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  p {
    width: 100%;
    height: 100px;
    line-height: 140%;
    letter-spacing: 1px;
    display: flex;
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
  
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;

    width: 281px;
    height: 14px;
    transition: 0.5s
  }

  a:hover {
    text-decoration: underline;
  }

  a:active {
    text-decoration: underline;
  }
`;

export const CustomListFooter = styled(MenuList)`
  margin-top: 32px;
  display: flex;
  width: 135px;
  height: 176px;
  flex-direction:column;
  padding: 0;
  justify-content: space-between;

  li {
    padding: 0;
    margin: 0;
  }

  button {
    padding: 0;
    height: 14px;
    text-transform: none;
    font-size: 14px;
    line-height: 100%;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.black.main}
  }
`;

export const FormFotter = styled('form')`
  margin-top: 46px;
  width: 292px;
  height: 161px;

  /* input {
    font-weight: 400;
  } */

  p {
    margin-top: 15px;
    width: 310px;
    height: 42px;
    line-height: 120%;
  }
`;

export const ContactSection = styled('div')`
  width: 263px;
  height: 214px;
  margin: 48px 0 0 0;
  padding: 0;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 263px;
    height: 160px;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
  }
  img {
    margin:0 6px 0 0;
    padding: 0;
  }

  div:first-of-type {
    height: 24px;
    p {
      height: 24px;
      width: 223px;
    }
  }

  div:nth-of-type(2) {
    height: 40px;

    p {
      height: 40px;
    }
  }

  div:nth-of-type(3) {
    height: 48px;
    p {
      height: 40px;
    }
  }
`;

export const SocialMediaButtons = styled('section')`
  margin-top: 48px;
  width: 258.79px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const CustomTextField = styled(TextField)`
    margin-top: 32px;
    padding-left: 5px;
    padding-right: 5px;
    width: 292px; 
    height: 22px;
    font-size: 18px;
`;
