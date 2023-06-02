import React from 'react';
import { Typography } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { losangulo, textura } from '../../images/backgrounds';
import { BGHeader,
  CustomBody,
  CustomMainArticleContainer, CustomTypography } from '../../styles/home/MainArticle';
import { CustomButton } from '../../styles/Buttons';

function MainArticle() {
  const history = useHistory();
  return (
    <CustomMainArticleContainer id="main-article-title">
      <BGHeader>
        <img src={ losangulo } alt="" />
        <img src={ textura } alt="" />
      </BGHeader>

      <CustomTypography variant="h4">
        Creative Intelligence Office
      </CustomTypography>
      <CustomBody>
        <Typography variant="body1" color="primary">
          Somos uma consultoria de insights
          que constrói o novo a partir da análise inteligente e criativa dos dados.
        </Typography>
        <Typography variant="body2" color="primary">
          Em uma época em que a tecnologia está
          presente no dia-a-dia das empresas e que os
          dados estão sempre disponíveis,
          o trabalho de pesquisa precisa evoluir.
          A Scoop & Co entende que tecnologia e dados
          não fazem nada sozinhos, são apenas as
          ferramentas e instrumentos para chegar no
          que realmente é importante: construir
          conhecimento e gerar oportunidades
          de negócio para as marcas.

        </Typography>
        <CustomButton
          onClick={ () => {
            console.log('cliquei');
            history.push('/aprofundamento');
          } }
          variant="contained"
        >
          prazer, scoop!

        </CustomButton>
      </CustomBody>
    </CustomMainArticleContainer>
  );
}

export default MainArticle;
