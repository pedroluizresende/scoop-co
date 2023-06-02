import React from 'react';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FooterMobileContainer, SocialMediaButtons } from '../../styles/FooterMobiles';

import logo from '../../images/Logo.svg';
import { UpButton } from '../../styles/Buttons';
import NavigationMenu from './NavigationMenu';
import InputFooter from './InputFooter';
import Contact from './Contact';

import { instagram, facebook, linkedin } from '../../images/social-media';
import { CustomButton } from '../../styles/SocialMediaButton';

function FooterMobile() {
  const logos = [instagram, facebook, linkedin];

  const upHandle = () => {
    const element = document.getElementById('home-title');
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterMobileContainer>
      <header>
        <img src={ logo } alt="logo" />
        <UpButton
          onClick={ upHandle }
          variant="contained"
        >
          <KeyboardArrowUpRoundedIcon color="black" />
        </UpButton>
      </header>
      <Typography variant="body2" color="primary">
        Somos uma consultoria de
        {' '}
        <br />
        {' '}
        insights que cria novas
        ideias & oportunidades de negócios a
        {' '}
        <br />
        {' '}
        partir de uma
        análise inteligência & criativa dos dados.
      </Typography>
      <NavigationMenu />
      <InputFooter />
      <Contact />
      <SocialMediaButtons>
        {
          logos.map((l, index) => (
            <CustomButton key={ index }>
              <img src={ l } alt="logo social midia" />
            </CustomButton>
          ))
        }
      </SocialMediaButtons>
      <Link to="/termos-de-uso">Termos de uso  |  Política de privacidade</Link>

      <Typography
        sx={ { marginTop: '24px' } }
        variant="body2"
        color="primary"
      >
        Scoop & Co Ltda ® • 2023
        <br />
        Todos os direitos reservados
      </Typography>
    </FooterMobileContainer>
  );
}

export default FooterMobile;
