import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import moment from 'moment';

const TodoList = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  let [count, setCount] = useState('0');
  let [countn, setCountn] = useState('0');

  const addItems = () => {
    if (!inputData) {
    } else {
      setItems([...items, { name: inputData, Done: 0 }]);
      setInputData('');
      count++;
      setCount(count);
    }
  };
  const deleteItems = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
    
    count--;
    setCount(count);
    }
    const doneDeleteItems = (id) => {
      const updatedItems = items.filter((elem, ind) => {
        return ind !== id;
      });
      setItems(updatedItems);
      
      countn--;
      setCountn(countn);
      }


  
  const onCheck = (id, event) => {
    let tempItems = [...items];
    tempItems[id].Done = 1;
    setItems(tempItems);
    countn++;
    setCountn(countn);
    count--;
    setCount(count);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox' } };

  return (
    <>
      <Box>
        <Typography variant="h1">Intro to Remix</Typography>
        <Box style={{ display: 'flex', marginTop: 15 }}>
          <SubdirectoryArrowRightIcon
            style={{ color: 'grey', fontSize: 18, marginLeft: 10 }}
          />
          <Typography variant="subtitle1">
            You created this list {moment().fromNow()}
          </Typography>
        </Box>
        <Box
          style={{
            width: 650,
            maxWidth: '10',
            display: 'flex',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <TextField
            fullWidth
            autoComplete="off"
            label="What needs to be done?"
            id="fullWidth"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            InputProps={{
              style: {
                color: 'grey',
                fontWeight: 'bold',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'grey',
                fontWeight: 'bold',
                borderColor: 'white',
              },
            }}
          />
          <Button
            variant="contained"
            size="medium"
            onClick={addItems}
            style={{
              background: '#6565E4',
              fontWeight: 'bold',
              marginLeft: 15,
              height: 40,
            }}
          >
            Done
          </Button>
        </Box>
      </Box>
      <Box>
        <Box style={{ marginTop: 60 }}>
          <Typography variant="h3">Things to do ({count})</Typography>

          {items.map((elem, ind) => {
            return (
              elem.Done === 0 && (
                <Box
                  style={{
                    background: '#252531',
                    height: 50,
                    width: 650,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                >
                  <Box
                    
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Checkbox
                      onChange={() => {
                        onCheck(ind)}}
                      {...label}
                      style={{ color: '#6565E4' }}
                    />
                    <Typography variant="h4">{elem.name}</Typography>
                  </Box>
                  <DeleteOutlineIcon
                    onClick={() => deleteItems(ind)}
                    style={{
                      color: 'grey',
                      marginRight: 20,
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              )
            );
          })}
        </Box>

        <Box style={{ marginTop: 60 }}>
          <Typography variant="h3">Things done ({countn})</Typography>
          {items.map((elem, ind) => {
            return (
              elem.Done === 1 && (
                <Box
                  style={{
                    marginTop: 10,
                    background: '#252531',
                    height: 50,
                    width: 650,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: '#6565E4' }}
                    />
                    <Typography variant="h5">{elem.name}</Typography>
                  </Box>
                  <DeleteOutlineIcon 
                  onClick={() => doneDeleteItems(ind)}
                    style={{ color: 'grey', marginRight: 20, cursor:'pointer' }}
                  />
                </Box>
              )
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default TodoList;