import React from 'react';
import { Typography } from '@mui/material';
import { ProjectsContainer } from '../../styles/home/Projects';
import CarouselMobile from './CarouselMobile';

function Projects() {
  return (
    <ProjectsContainer>
      <header>
        <Typography
          variant="h3"
          fontSize="64px"
          fontWeight="400"
        >
          Projetos
        </Typography>
        <Typography variant="body1" color="primary">
          Análises, pesquisas, resultados, insights e estudos de mercado
        </Typography>
      </header>

      <CarouselMobile />
    </ProjectsContainer>
  );
}

export default Projects;
