import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
     
  },

  typography: {
    fontFamily: 'sans-serif',
    fontWeight:600,
    color:'White',
    h1:{
      fontSize: 30,
      fontWeight:700,
      color:'White',
    },
    h2: {
      fontSize: 20,
      fontWeight:700,
      color:'White',
    },
    h3:{
      fontSize: 18,
      fontWeight:400,
      color:'White',

    },
    h4:{
      fontSize: 18,
      fontWeight:'bold',
      color:'grey',
  },
  h5:{
    fontSize: 18,
    fontWeight:'bold',
    color:'grey',
    textDecoration:'line-through'
},
    subtitle1:{
      fontSize: 14,
      color:'grey',
      fontWeight:500,


    },
  }
  });

export default theme;