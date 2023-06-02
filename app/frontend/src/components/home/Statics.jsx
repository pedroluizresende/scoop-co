import { Typography } from '@mui/material';
import React from 'react';
import { CustomCard, CustomCardContent,
  CustomDivider, StaticsContainer } from '../../styles/home/Statics';

function Statics() {
  const statics = [{
    header: '+200',
    body: 'Marcas atendidas no Brasil e na Latam',
  },
  {
    header: '+500',
    body: 'Conceitos de inovação co-criados',
  },
  {
    header: '85%',
    body: 'De taxa de recompra de projetos',
  },
  ];
  return (
    <StaticsContainer>
      {
        statics.map(({ header, body }, index) => (
          <CustomCard
            sx={ { boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center' } }
            key={ `$${header}-${index}` }
          >
            <CustomCardContent>
              <Typography variant="h2">{header}</Typography>
              <Typography variant="subtitle1">{body}</Typography>
            </CustomCardContent>
            {
              index < (statics.length - 1)
              && <CustomDivider />
            }
          </CustomCard>
        ))
      }

    </StaticsContainer>
  );
}

export default Statics;
