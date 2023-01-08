import React,{useState} from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup,FormHelperText } from '@mui/material'

export const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log({value})
    
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
  return (
    <Box>
      {/* <h3>No. of Experience</h3> */}
      <FormControl error>
        <FormLabel id='job-experience'>Years of Exprience</FormLabel>
        {/* <RadioGroup name='job-experience'aria-labelledby='job-experience' value={value} onChange={handleChange} > */}
        <RadioGroup name='job-experience'aria-labelledby='job-experience' value={value} onChange={handleChange} row >
            <FormControlLabel control={<Radio  size='medium' color='secondary' />} label='0-2' value={'0-2'} />
            <FormControlLabel control={<Radio />} label='3-5' value={'3-5'} />
            <FormControlLabel control={<Radio />} label='6-10' value={'6-10'} />
        </RadioGroup>
        <FormHelperText>Invalid Selction</FormHelperText>
      </FormControl>
    </Box>
  )
}


