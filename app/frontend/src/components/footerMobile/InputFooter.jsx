import { IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { CustomTextField,
  FormFotter } from '../../styles/FooterMobiles';

function InputFooter() {
  const [emailInput, setEmailInput] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [wasSent, setWasSent] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setEmailInput(value);
    if (value.length > 0) {
      setIsWriting(true);
    } else {
      setIsWriting(false);
    }
  };

  const clickChange = () => {
    const timeOut = 3000;
    setWasSent(true);
    setIsWriting(false);
    setEmailInput('Enviado!');
    setTimeout(() => {
      setEmailInput('');
      setWasSent(false);
    }, timeOut);
  };

  return (
    <FormFotter>
      <Typography
        variant="subtitle1"
        fontFamily="Montserrat, sans-serif"
        color="primary"
      >
        Agora nós temos uma newsletter!

      </Typography>
      <CustomTextField
        id="standard-basic"
        variant="standard"
        placeholder="E-mail"
        onChange={ handleChange }
        value={ emailInput }
        InputProps={ {
          endAdornment: (
            <IconButton
              sx={ { p: '0' } }
              onClick={ clickChange }
              edge="start"
              color="primary"
            >
              {isWriting && <EastOutlinedIcon /> }
              {wasSent && <DoneOutlinedIcon color="success" /> }
            </IconButton>
          ),
          style: { color: wasSent ? '#37ACA7' : '#5B5051',
            fontWeight: wasSent ? '700' : '400',
          },
        } }
      />
      <Typography variant="body2">
        Inscreva-se e receba nossos conteúdos em primeira mão.
      </Typography>
    </FormFotter>
  );
}

export default InputFooter;
