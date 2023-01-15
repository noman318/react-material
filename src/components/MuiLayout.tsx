import { Box, Typography } from '@mui/material'
import React from 'react'

export const MuiLayout = () => {
  return (
    <>
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
    <Box display={'flex'} height={'100px'} width={'100px'} bgcolor={'secondary.light'} p={2} >
        
    </Box>
    </>
  )
}
