import React,{useState} from 'react'
import { Box,FormControlLabel,Switch, Typography } from '@mui/material'

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log({checked})
    const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(event.target.checked)
    }
  return (
    <Box>
        <Typography variant='h5'>
            Switch Components Practice
        </Typography>
            <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange} />} />
    </Box>
  )
}
