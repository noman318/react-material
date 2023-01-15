import React,{useState} from 'react'
import { Stack, Typography,Autocomplete,  TextField } from '@mui/material'

type Skill = {
  id: number,
  label: string
}

const skills =  ['HTML','CSS','JavaScript','TypeScript', 'React']
const skillOption = skills.map((skill,index)=>({
  id: index + 1,
  label : skill
}))

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null)

  const [complete, setComplete] = useState<Skill | null>(null)

  console.log({complete})
  console.log({value})
  return (
    <Stack spacing={2} width={'250px'}>
    <Typography variant='h4'>MuiAutocomplete</Typography>
    <Autocomplete options={skills} 
    renderInput={(params)=><TextField {...params} label='Skills' />} 
    value={value}
    onChange={(event:any, newValue: string | null) => setValue(newValue)}
    freeSolo
    />
    <Autocomplete options={skillOption} 
    renderInput={(params)=><TextField {...params} label='Skills' />} 
    value={complete}
    onChange={(event:any, newValue: Skill | null) => setComplete (newValue)}
    />
    </Stack>
    
  )
}
