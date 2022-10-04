import React from 'react'
import { Paper, Container, Grid, Typography } from '@mui/material';

const Header = () => {
  return (
  <>
  <main >
    <Paper className='main'>
      <Container fixed>
        <Grid container>
          <Grid item xs={6}>
            <div>
              <Typography 
              variant='h2'
              className='info'
              >
                Company image
              </Typography>
              <Typography
              variant='p'
              className='info'
              >
               Компанія IMG – це активний гравець на ринку прикладних наукомістких технологій для молекулярно-генетичних, аналітичних та криміналістичних завдань. З моменту створення компанії в 2013 році нашою місією є надання комплексних рішень для клієнтів в різних областях науки.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  </main>
  </>
  )
}
export default Header;