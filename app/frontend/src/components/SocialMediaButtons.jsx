import React from 'react';

import facebook from '../images/social-media/facebook.svg';
import instagram from '../images/social-media/instagram.svg';
import linkedin from '../images/social-media/linkedin.svg';
import { ButtonContainer, Container, CustomButton } from '../styles/SocialMediaButton';
import mobileMenuBg from '../images/backgrounds/mobileMenuBg.svg';
// teste
function SocialMediaButtons() {
  const logos = [instagram, facebook, linkedin];
  return (
    <Container>
      <ButtonContainer>
        {
          logos.map((logo, index) => (
            <CustomButton key={ index }>
              <img src={ logo } alt="logo social midia" />
            </CustomButton>
          ))
        }

      </ButtonContainer>

      <img src={ mobileMenuBg } alt="bg" />
    </Container>
  );
}

export default SocialMediaButtons;
