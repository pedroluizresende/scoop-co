import { Button, ListItem } from '@mui/material';
import React from 'react';
import { CustomListFooter } from '../../styles/FooterMobiles';

function NavigationMenu() {
  return (
    <CustomListFooter>
      <ListItem>
        {' '}
        <Button variant="text">Prazer, Scoop!</Button>
      </ListItem>
      <ListItem>
        {' '}
        <Button variant="text">Nossa abordagem</Button>
      </ListItem>
      <ListItem>
        {' '}
        <Button variant="text">Como funciona</Button>
      </ListItem>
      <ListItem>
        {' '}
        <Button variant="text">Vamos conversar?</Button>
      </ListItem>
    </CustomListFooter>
  );
}

export default NavigationMenu;
