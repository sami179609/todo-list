import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';




const Navbar = () => {
    return (
        <>
            <Box sx={{ width: '100%', background:'#252531',display:'flex',height:'60px',alignItems: 'center',boxShadow: '2px -15px 25px 7px'  }}>
               <Box sx={{marginLeft:'300px'}}> 
    <Typography variant="h2"> Todo List Manager</Typography>
    </Box>
    </Box>
        </>
    )
}

export default Navbar
