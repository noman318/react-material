import React,{useState} from 'react'
import { Accordion,AccordionSummary,AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export const MuiAccordian = () => {
    const [expanded, setExpanded] = useState<string|false>(false)
    const handleExpanded=(isExpanded:boolean,panel:string)=>{
        setExpanded(isExpanded?panel:false)
    }
  return (
    <div>
    <Typography>MuiAccordian</Typography>
    <Accordion expanded={expanded === 'panel1'} onChange={(event,isExpanded)=>handleExpanded(isExpanded,'panel1')} >
        <AccordionSummary id='header'aria-controls='panel1' expandIcon={<ExpandMore />}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda molestiae itaque earum non culpa laudantium possimus, tenetur maiores alias eaque dignissimos doloribus omnis?</Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={(event,isExpanded)=>handleExpanded(isExpanded,'panel2')}>
        <AccordionSummary id='header2'aria-controls='panel2' expandIcon={<ExpandMore />}>
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda molestiae itaque earum non culpa laudantium possimus, tenetur maiores alias eaque dignissimos doloribus omnis?</Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={(event,isExpanded)=>handleExpanded(isExpanded,'panel3')}>
        <AccordionSummary id='header3'aria-controls='panel3' expandIcon={<ExpandMore />}>
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda molestiae itaque earum non culpa laudantium possimus, tenetur maiores alias eaque dignissimos doloribus omnis?</Typography>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}
