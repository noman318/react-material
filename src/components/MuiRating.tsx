import { Typography,Stack,Rating } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import React,{useState} from 'react'

export const MuiRating = () => {
    const [rating, setRating] = useState<number|null >(null)
    // const [rating, setRating] = useState<number|null >(3)
    console.log(rating)
    const handleRating = (event:React.ChangeEvent<{}>, newValue: number|null)=>{
        setRating(newValue)
    }
  return (
    <Stack>
     <Typography>MuiRating</Typography>
     <Rating value={rating} onChange={handleRating} 
      precision={0.5} 
      size='small' 
    //   icon={<Favorite  fontSize='inherit' color='error' />}
    //   emptyIcon={<FavoriteBorder  fontSize='inherit' />}
    //   readOnly
    //   highlightSelectedOnly
      />
    </Stack>
  )
}
