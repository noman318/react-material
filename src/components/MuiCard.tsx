import { Typography,Box, Card, CardContent,CardActions,CardMedia, Button } from '@mui/material'
import React from 'react'

export const MuiCard = () => {
  return (

    <Box width={'300px'} m={'2px'}>
    <Typography variant='h5'>MuiCard</Typography>
    <Card sx={{margin:'20px', padding:'10px'}} >
        <CardMedia component={'img'} 
        image='https://source.unsplash.com/random' 
        height={'400px'} width={'300px'} alt='card_image' />
        <CardContent>
            <Typography variant='h5' component={'div'}>React</Typography>
            <Typography variant='body2' color={'text.secondary'}>
            Last year, I have received multiple messages, mostly from newcomers that have just graduated and stepped into the world of coding.
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='contained'>SHARE</Button>
            <Button variant='outlined'>LEARN MORE</Button>
        </CardActions>
    </Card>
    </Box>
  )
}
