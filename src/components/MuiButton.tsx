/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useState} from 'react'
import {Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from '@mui/material'
import {Send, FormatBold, FormatItalic, FormatUnderlined} from '@mui/icons-material'

const MuiButton = () => {
    const [format, setFormat] = useState<string| null>(null);

    const handleToggleChange =(event: React.MouseEvent<HTMLElement>, updatedFormat:string|null)=>{
        setFormat(updatedFormat)
        console.log(format);
    }
    
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
      <Button variant='text' href='https://mui.com/material-ui/customization/default-theme/' >Text</Button>
      <Button variant='contained'>contained</Button>
      <Button variant='outlined'>outlined</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained'color='primary'>Primary</Button>
        <Button variant='contained'color='secondary'>secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning' >Warning</Button>
        <Button variant='contained' color='success'>Success</Button>
    </Stack>
    {/* <Stack spacing={2} direction='row'>
        <Button variant='outlined'color='primary'>Primary</Button>
        <Button variant='outlined'color='secondary'>secondary</Button>
        <Button variant='outlined' color='error'>Error</Button>
        <Button variant='outlined' color='warning' >Warning</Button>
        <Button variant='outlined' color='success'>Success</Button>
    </Stack> */}
    {/* <Stack display='block' spacing={2} direction='row'>
        <Button variant='text'color='secondary'>secondary</Button>
        <Button variant='text' color='error'>Error</Button>
        <Button variant='text' color='warning' >Warning</Button>
        <Button variant='text' color='success'>Success</Button>
    </Stack> */}
    <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained'size='small' color='secondary'>secondary</Button>
        <Button variant='contained'size='medium'  color='error'>Error</Button>
        <Button variant='contained'size='large'  color='success'>Success</Button>
    </Stack>
    {/* <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained'color='secondary' disableRipple onClick={()=> alert('clicked')} startIcon={<Send/>}>Send</Button>
        <Button variant='contained'color='warning' disableElevation endIcon={<Send/>}>Send</Button>
        <IconButton color='success' size='small'>
            <Send/>
        </IconButton>
    </Stack> */}
    {/* <Stack direction='row'> 
        <ButtonGroup variant='contained' color='warning' size='medium' orientation='vertical' aria-label='alignment group'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </Stack> */}
    <Stack direction='row'> 
        <ToggleButtonGroup size='large' color='warning'exclusive aria-label='alignment group' value={format} onChange={handleToggleChange} >
            <ToggleButton value={'bold'}><FormatBold /></ToggleButton>
            <ToggleButton value={'italic'}><FormatItalic /></ToggleButton>
            <ToggleButton value={'underlined'}><FormatUnderlined /></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    </Stack>
  )
}

export default MuiButton
