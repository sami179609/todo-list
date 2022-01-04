import { createTheme } from '@mui/material/styles';



const theme = createTheme({
  palette: {
     
  },

  typography: {
    fontFamily: 'sans-serif',
    fontWeight:600,
    color:'White',
    h1:{
      fontSize: '2rem',
      fontWeight:700,
      color:'White',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight:700,
      color:'White',
    },
    h3:{
      fontSize:'1.1rem',
      fontWeight:400,
      color:'White',

    },
    h4:{
      fontSize: '1.1rem',
      fontWeight:'bold',
      color:'grey',
  },
  h5:{
    fontSize: '1.1rem',
    fontWeight:'bold',
    color:'grey',
    textDecoration:'line-through'
},
    subtitle1:{
      fontSize: '0.9rem',
      color:'grey',
      fontWeight:500,


    },
  }
  });

export default theme;