import { Typography } from '@mui/material';
import React from 'react';
import { ContactSection } from '../../styles/FooterMobiles';

import { email, mobile, location } from '../../images/icons';

function Contact() {
  return (
    <ContactSection>
      <Typography variant="h6" color="primary" fontFamily="MontSerrat, sans serif">
        Vamos conversar?
      </Typography>

      <section>
        <div>
          <img src={ email } alt="ícone de email" />
          <Typography color="primary" variant="body1">contato@scooper.com.br</Typography>
        </div>
        <div>
          <img src={ mobile } alt="ícone de celular" />
          <Typography color="primary" variant="body1">
            +55 11 4327-1871
            <br />
            +55 11 3032-4051

          </Typography>
        </div>
        <div>
          <img src={ location } alt="ícone de GPS" />
          <Typography color="primary" variant="body2">
            R. Natingui, 442 - sala 104 Vila Madalena, São Paulo
          </Typography>
        </div>
      </section>
    </ContactSection>
  );
}

export default Contact;
