import { Box, Typography, Stack,Divider, Grid,Paper } from '@mui/material'
import React from 'react'

export const MuiLayout = () => {
  return (
    <Paper sx={{padding:'30px'}} elevation={4}>
    {/* <Stack sx={{border: '1px solid black'}} direction={'row-reverse'}> */}
    <Stack sx={{border: '1px solid black'}} 
    direction={'row'}
    spacing={2} 
    divider={<Divider orientation='vertical' flexItem />} >
        <Box sx={{
            backgroundColor: 'primary.main',
            color:'white',
            height:'100px',
            width:'100px',
            padding:'16px',
            '&:hover':{
                backgroundColor:'primary.light',
                borderRadius:'20px'
            }
        }} >
            <Typography variant='h6'>MuiLayout</Typography>
        </Box>
        <Box display={'flex'} height={'100px'} width={'100px'} bgcolor={'secondary.light'} p={2}></Box>
    </Stack>
        <Grid container my={4}rowSpacing={2}columnSpacing={2}>
            <Grid item xs={12} sm={6} md={3}>
                <Box bgcolor={'success.light'} p={2}>
                    Item 1
                </Box>
                </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box bgcolor={'success.light'} p={2}>
                    Item  2
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box bgcolor={'success.light'} p={2}>
                    Item 3
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box bgcolor={'success.light'} p={2}>
                    Item 4
                </Box>
            </Grid>
        </Grid>
    </Paper>
  )
}
