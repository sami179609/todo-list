import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import moment from 'moment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TodoList = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, { name: inputData, done: 'false' }]);
      setInputData('');
    }
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  const onCheck = (id, event) => {
    let tempItems = [...items];
    tempItems[id].done = 'true';
    setItems(tempItems);
  };
  const onUnCheck = (id, event) => {
    let tempItems = [...items];
    tempItems[id].done = 'false';
    setItems(tempItems);
    console.log(items);
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
            width: '42rem',
            maxWidth: '10',
            display: 'flex',
            marginTop: 20,
          }}
        >
          <TextField
            fullWidth
            error={inputData.length ? false : true}
            required
            autoComplete="off"
            label="What needs to be done?"
            
            id="outlined-required"
            name="input"
            value={inputData}
            helperText={inputData.length ? '' :'Please write task name' }
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
            onClick={addItem}
            style={{
              borderRadius: '8px',
              background: '#6565E4',
              fontWeight: 'bold',
              marginLeft: 15,
              height: '2.5rem',
              marginTop:'0.6rem'
            }}
          >
            Done
          </Button>
        </Box>
      </Box>
      <Box>
        <Box style={{ marginTop: 60 }}>
          <Typography variant="h3">
            Things to do (
            {items.length
              ? items?.filter((item) => item.done === 'false').length
              : 0}
            )
          </Typography>

          {items.map((elem, ind) => {
            return (
              elem.done === 'false' && (
                <Box
                  style={{
                    background: '#252531',
                    height: '3rem',
                    width: '40rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                >
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                      onChange={() => {
                        onCheck(ind);
                      }}
                      {...label}
                      style={{ color: '#6565E4' }}
                    />
                    <Typography variant="h4">{elem.name}</Typography>
                  </Box>
                  <span>
                    <ContentCopyIcon
                      onClick={() => {
                        setItems([
                          ...items,
                          { name: elem.name, done: 'false' },
                        ]);
                      }}
                      style={{
                        color: 'grey',
                        marginRight: 20,
                        cursor: 'pointer',
                      }}
                    />
                    <DeleteOutlineIcon
                      onClick={() => {
                        deleteItem(ind);
                        handleClickOpen();
                      }}
                      style={{
                        color: 'grey',
                        marginRight: 20,
                        cursor: 'pointer',
                      }}
                    />
                  </span>
                </Box>
              )
            );
          })}
        </Box>

        <Box style={{ marginTop: 60 }}>
          <Typography variant="h3">
            Things done (
            {items.length
              ? items?.filter((item) => item.done === 'true').length
              : 0}
            )
          </Typography>
          {items.map((elem, ind) => {
            return (
              elem.done === 'true' && (
                <Box
                  style={{
                    marginTop: 10,
                    background: '#252531',
                    height: '3rem',
                    width: '40rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                      {...label}
                      onChange={(e) => {
                        onUnCheck(ind);
                      }}
                      defaultChecked
                      style={{ color: '#6565E4' }}
                    />
                    <Typography variant="h5">{elem.name}</Typography>
                  </Box>
                  <span>
                    <ContentCopyIcon
                      onClick={() => {
                        setItems([...items, { name: elem.name, done: 'true' }]);
                      }}
                      style={{
                        color: 'grey',
                        marginRight: 20,
                        cursor: 'pointer',
                      }}
                    />
                    <DeleteOutlineIcon
                      onClick={() => {
                        deleteItem(ind);
                        handleClickOpen();
                      }}
                      style={{
                        color: 'grey',
                        marginRight: 20,
                        cursor: 'pointer',
                      }}
                    />
                  </span>
                </Box>
              )
            );
          })}
        </Box>
        <Box>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{'Confirmation Message'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Do you really want to delete this task?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Yes</Button>
              <Button onClick={handleClose}>No</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};

export default TodoList;