import React, { useEffect, useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { Typography } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import { CarouselButtons, CarouselContainer,
  TextContent } from '../../styles/home/Projects';
import projectsData from '../../data/projects';
import 'animate.css';

function CarouselMobile() {
  const [currIndex, setCurrIndex] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrevius, setDisabledPrevius] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);

  const nextProject = () => {
    const projectLength = projectsData.length;
    if (currIndex + 1 >= projectLength) {
      setCurrIndex(currIndex);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  const previusProject = () => {
    if (currIndex === 0) {
      setCurrIndex(currIndex);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const distanceParam = 50;
    const touchEndX = e.changedTouches[0].clientX;
    const touchDistance = touchEndX - touchStartX;

    if (touchDistance > distanceParam) {
      previusProject();
    } else if (touchDistance < -distanceParam) {
      nextProject();
    }
  };

  useEffect(() => {
    if (currIndex + 1 >= projectsData.length) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }

    if (currIndex > 0) {
      setDisabledPrevius(false);
    } else {
      setDisabledPrevius(true);
    }
  }, [currIndex]);

  return (
    <CSSTransition
      key={ currIndex }
      classNames={ {
        enter: 'animate__animated animate__fadeInRight',
        enterActive: 'animate__animated animate__fadeInRight',
        exit: 'animate__animated animate__fadeOutLeft',
        exitActive: 'animate__animated animate__fadeOutLeft',
      } }
      timeout={ 300 }
    >
      <CarouselContainer
        onTouchStart={ handleTouchStart }
        onTouchEnd={ handleTouchEnd }
      >

        <div
          style={ {
            backgroundImage: `url(${projectsData[currIndex].imageUrl})`,
            backgroundSize: 'cover',
          } }
        >
          <div style={ { backgroundColor: '#537a82b3' } } />
        </div>
        <TextContent>
          <Typography
            textTransform="uppercase"
            variant="body1"
            color="#37ACA7"
            fontWeight={ 700 }
          >
            {projectsData[currIndex].client}
          </Typography>

          <Typography variant="h6" fontSize="24px" color="#537A82">
            {projectsData[currIndex].title}
          </Typography>
          <Typography marginTop="24px" variant="body2" color="primary">
            {projectsData[currIndex].content}
          </Typography>
        </TextContent>

        <CarouselButtons
          onClick={ previusProject }
          variant="contained"
          color="success"
          disabled={ disabledPrevius }
        >
          <WestOutlinedIcon color="primary" fontSize="large" />
        </CarouselButtons>

        <CarouselButtons
          onClick={ nextProject }
          variant="contained"
          color="primary"
          disabled={ disabledNext }
        >
          <EastOutlinedIcon color="success" fontSize="large" />
        </CarouselButtons>

      </CarouselContainer>

    </CSSTransition>
  );
}

export default CarouselMobile;
