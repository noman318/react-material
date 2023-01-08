import React,{useState} from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box,FormControlLabel, Checkbox,FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import { BookmarkBorder, Bookmark } from '@mui/icons-material';

export const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    
    // console.log({acceptTnC})
    console.log({skills})

    const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTnC(event.target.checked)
    }
    const handleSkillChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter((skill)=> skill !== event.target.value))
        }
    }
    
  return (
    <Box>
      <Box>
        <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange} />} />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} checked={acceptTnC} onChange={handleChange} />
      </Box>
      <Box>
        <FormControl>
        {/* <FormControl error> */}
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
            {/* <FormGroup> */}
                <FormControlLabel label='HTML' value={'html'} control={<Checkbox color='success'checked={skills.includes('html')} onChange={handleSkillChange} />} />
                <FormControlLabel label='CSS' value={'css'} control={<Checkbox color='success' checked={skills.includes('css')} onChange={handleSkillChange} />} />
                <FormControlLabel label='JavaScript' value={'javascript'} control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />} />
            </FormGroup>
            {/* <FormHelperText>Inavlid selection</FormHelperText> */}
        </FormControl>
      </Box>
    </Box>
  )
}


