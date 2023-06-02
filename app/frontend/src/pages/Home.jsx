import React from 'react';
import Header from '../components/Header';
import homebg from '../images/backgrounds/homebg.svg';
import { HomeContainer, ImageBG1 } from '../styles/home/Home';
import SubHeader from '../components/home/SubHeader';
import MainArticle from '../components/home/MainArticle';
import Statics from '../components/home/Statics';
import IntroDeepening from '../components/home/IntroDeepening';
import Projects from '../components/home/Projects';
import FooterMobile from '../components/footerMobile/FooterMobile';
import Clients from '../components/home/clients/Clients';

function Home() {
  return (
    <HomeContainer>
      <Header />
      <SubHeader />
      <ImageBG1 src={ homebg } alt="background" />
      <MainArticle />
      <Statics />
      <IntroDeepening />
      <Projects />
      <Clients />
      <FooterMobile />
    </HomeContainer>
  );
}

export default Home;
