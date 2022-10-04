import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Menu = () => {
  return (
    <>
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <Typography variant='h6'>Company image</Typography>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}
export default Menu;