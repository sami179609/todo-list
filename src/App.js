import React from 'react';
import './App.css';
import Navbar from './UI Elements/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme' 
import Box from '@mui/material/Box';
import TodoList from './UI Elements/TodoList';


function App() {

  
  return (
    <ThemeProvider theme={theme}>
  
    <>
    
   <Navbar />
   <Box style={{padding: '4rem 19rem 4rem 19rem'}} >
   <TodoList />
</Box>

 
    </>
    
    </ThemeProvider >
  );
}

export default App;
