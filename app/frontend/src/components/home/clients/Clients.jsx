import React from 'react';
import { Typography } from '@mui/material';
import { ClientsContainer } from '../../../styles/home/Clients';
import ClientsCarousel from './ClientsCarousel';

function Clients() {
  return (
    <ClientsContainer>
      <Typography variant="h4" color="#292424" fontWeight={ 400 }>
        Clients
      </Typography>
      <Typography variant="subtitle1" color="primary" fontWeight={ 600 }>
        Olha só com quem já trabalhamos:
      </Typography>
      <ClientsCarousel />
    </ClientsContainer>
  );
}

export default Clients;
