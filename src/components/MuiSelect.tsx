import React,{useState} from 'react'
import { Box,TextField,MenuItem } from '@mui/material'

export const MuiSelect = () => {
    const [country, setCountry] = useState<string[]>([]);
    console.log({country})
    const handleCountry=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value
        setCountry(typeof value === 'string' ? value.split(','): value)
    }
    
  return (
    <Box width={'200px'}>
      <TextField label='Select Country' select value={country} fullWidth onChange={handleCountry} SelectProps={{ multiple:true}} size='small' color='secondary' error helperText='Please Select Your Country'>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}
 