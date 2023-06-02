import React, { useContext, useState } from 'react';
import { Fade } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logo from '../images/logo horizontal.svg';
import { HeaderMobileContainer, LogoHorizontal,
  MenuButton } from '../styles/HeaderMobile';
import MenuMobile from './MenuMobile';
import { MenuContext } from '../contexts/MenuProvider';
import { CloseMenu } from '../styles/MenuMobile';
import 'animate.css';

function Header() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = () => {
    const time = 500;
    if (showMenu) {
      setFadeOut(true);
      setTimeout(() => {
        setShowMenu(false);
        setFadeOut(false);
      }, time);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <HeaderMobileContainer
      style={ {
        backgroundColor: `${showMenu ? 'none' : '#F6FAEF'}`,
        opacity: `${showMenu ? 'calc(100%)' : 'calc(95%)'}`,
      } }
    >
      <LogoHorizontal src={ logo } alt="logo" />
      {!showMenu ? (
        <MenuButton onClick={ handleChange }>
          <div />
          <div />
          <div />
        </MenuButton>
      ) : (
        <CloseMenu color="white" onClick={ handleChange }>
          <CloseOutlinedIcon fontSize="large" />
        </CloseMenu>
      )}

      <Fade in={ showMenu } timeout={ 500 }>
        <div>
          {' '}
          {showMenu && (
            <div className={ `animate__animated ${fadeOut ? 'animate__fadeOut' : ''}` }>
              <MenuMobile />

            </div>)}
        </div>

      </Fade>
    </HeaderMobileContainer>
  );
}

export default Header;
