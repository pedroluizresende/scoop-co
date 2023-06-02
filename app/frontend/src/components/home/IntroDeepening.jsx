import React from 'react';
import { Typography } from '@mui/material';
import { BgImages,
  IntroDeepeningContainer, TextContainer } from '../../styles/home/IntroDeepening';

import { formaAbstrata, linhasRetas,
  circuloPontilhado, circuloAzul, triangulo } from '../../images/backgrounds';
import { CustomButton } from '../../styles/Buttons';

function IntroDeepening() {
  const images = [linhasRetas, formaAbstrata, circuloPontilhado, circuloAzul, triangulo];

  return (
    <IntroDeepeningContainer>
      <BgImages>
        {
          images.map((image, index) => (
            <img
              key={ `image-${index}` }
              src={ image }
              alt={ `backgrond-${index}` }
            />
          ))
        }
      </BgImages>
      <TextContainer>
        <Typography color="primary" variant="h4">
          Connect,
          Combine
          <br />
          & Construct
        </Typography>
        <Typography color="primary" variant="body1">
          Os dados sempre estiveram disponíveis.
          Hoje em dia, mais ainda.
          Nosso método de trabalho encara o dado como commodity e
          por isso vai muito além.
          <br />
          <strong>Conectamos</strong>
          {' '}
          diferentes fontes e
          <strong>combinamos</strong>
          {' '}
          as informações para criar modelos estratégicos
          únicos. Através desses modelos, conseguimos visualizar as
          oportunidades de forma mais inteligente para
          {' '}
          <strong>construir</strong>
          {' '}
          ideias e insights mais criativos.
        </Typography>

        <CustomButton variant="contained">descubra</CustomButton>
      </TextContainer>
    </IntroDeepeningContainer>
  );
}

export default IntroDeepening;
