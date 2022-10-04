import React from 'react'
import {Container} from '@mui/material';
import {Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   <>
     <Container maxWidth='md'>
       <Typography 
      variant='h2'
      align='center'
      color='textPrimary'
      paddingTop={10}
      gutterButtom
      >
        Company image
      </Typography>
      <Button onClick={handleOpen}>Open modal</Button>
      <Typography 
      variant='h5'
      align='center'
      color='textSecondary'
      paragraph
      >
       Компанія IMG – це активний гравець на ринку прикладних наукомістких технологій для молекулярно-генетичних, аналітичних та криміналістичних завдань. З моменту створення компанії в 2013 році нашою місією є надання комплексних рішень для клієнтів в різних областях науки.
      </Typography>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
           <Button onClick={handleClose}>Open close</Button>
        </Box>
      </Modal>
      <Grid container columnSpacing={5}>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://img.ua/wp-content/uploads/2022/09/img-ob%E2%80%99yektyvy-dlya-mikroskopiv-1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="p" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://img.ua/wp-content/uploads/2022/09/img-ob%E2%80%99yektyvy-dlya-mikroskopiv-1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="p" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='primary'>Share</Button>
          <Button size="small" color='primary'>Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
       <Grid container columnSpacing={5}>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://img.ua/wp-content/uploads/2022/09/img-ob%E2%80%99yektyvy-dlya-mikroskopiv-1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://img.ua/wp-content/uploads/2022/09/img-ob%E2%80%99yektyvy-dlya-mikroskopiv-1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
     </Container>
   </>
  )
}
export default Main;
