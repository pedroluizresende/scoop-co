import React from 'react';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import { CustomContainer, CustomTypografy } from '../../styles/home/SubHeader';
import { ArrowButton } from '../../styles/Buttons';

function SubHeader() {
  const clickChangle = () => {
    const element = document.getElementById('main-article-title');
    console.log('cliquei');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <CustomContainer>
      <CustomTypografy variant="h6" id="home-title">
        Combinando
        {' '}
        <strong>
          inteligência e criatividade
        </strong>
        {' '}
        para encontrar
        {' '}
        <span>insights</span>
        {' '}
        que mudam o jogo
      </CustomTypografy>
      <ArrowButton onClick={ clickChangle } color="black">
        <SouthOutlinedIcon style={ { fontSize: '41.79px' } } />
      </ArrowButton>
    </CustomContainer>
  );
}

export default SubHeader;
