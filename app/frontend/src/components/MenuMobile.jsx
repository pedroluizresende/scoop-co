import React from 'react';
import { CustomMenuItem,
  CustomMenuList, MenuContainer } from '../styles/MenuMobile';
import { HeaderMobileContainer,
  LogoHorizontal, TalkButton } from '../styles/HeaderMobile';
import logoBranco from '../images/logo-branco.svg';

import 'animate.css';
import SocialMediaButtons from './SocialMediaButtons';

function MenuMobile() {
  return (
    <MenuContainer>
      <HeaderMobileContainer>
        <LogoHorizontal src={ logoBranco } alt="logo" />

      </HeaderMobileContainer>

      <CustomMenuList>
        <CustomMenuItem>
          PRAZER, SCOOP
        </CustomMenuItem>
        <CustomMenuItem>
          NOSSA ABORDAGEM
        </CustomMenuItem>
        <CustomMenuItem>
          COMO FUNCIONA
        </CustomMenuItem>
        <CustomMenuItem>
          <TalkButton>Vamos conversar?</TalkButton>
        </CustomMenuItem>
      </CustomMenuList>

      <SocialMediaButtons />
    </MenuContainer>
  );
}

export default MenuMobile;
