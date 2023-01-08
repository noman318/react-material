import React,{useState} from 'react'
import {Stack, TextField, InputAdornment} from '@mui/material'
import { Visibility } from '@mui/icons-material'

export const MuiTextFields = () => {
    const [value, setValue] = useState('');
    
  return (
    <Stack spacing={2}>
        <Stack direction={'row'} spacing={2} >
            <TextField label='Name' />
            <TextField label='Name' variant='filled' />
            <TextField label='Name' variant='standard' />
      </Stack> 
      <Stack direction={'row'} spacing={2} >
            <TextField label='Name' color='secondary' size='small' required />
      </Stack> 
      <Stack direction={'row'} spacing={2} >
            <TextField label='Name' type={'text'} color='secondary' value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? 'Required':"Don't share your password"} size='small' required />
            <TextField label='Password' type={'password'} helperText="Don't share your password" color='secondary' size='small' required InputProps={{endAdornment:<InputAdornment position='end'><Visibility /></InputAdornment> }} />
      </Stack> 
      {/* <Stack direction={'row'} spacing={2} > */}
            {/* <TextField label='Name' type={'text'} color='secondary' size='small' inputProps={{readOnly: true}} /> */}
            {/* <TextField label='Password' type={'password'} helperText="Don't share your password" color='secondary' size='small' required /> */}
      {/* </Stack>  */}

      <Stack direction={'row'} spacing={2} >
            <TextField label='Amount' type={'text'} color='secondary' size='small' InputProps={{startAdornment:<InputAdornment position='start'>Rs.</InputAdornment> }} />
            <TextField label='Weight' type={'text'} color='secondary' size='small' InputProps={{endAdornment:<InputAdornment position='end'>Kg</InputAdornment> }} />
      </Stack> 
    </Stack>
  )
}
