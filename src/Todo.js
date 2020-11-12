import React, {useState} from 'react';
import {List, ListItem, ListItemText, ListItemAvatar, Button, Modal, Input} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import styled from 'styled-components';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const [input, setInput] = useState("");

   const handleOpen = () => {
       setOpen(true);
   };

   const updateTodo = () => {
     db.collection('todos').doc(props.todo.id).set({
       todo: input
     }, {merge: true});
     setOpen(false);
   }
    return (
        <DIV>
            <Modal open={open}
                   onClose={e => setOpen(false)}
            > 
            <div className={classes.paper}>
                <h1> UPDATE THIS Todo </h1>
                <Input 
                        value={input} 
                        placeholder={props.todo.todo}
                        onChange={event => setInput(event.target.value)}
                />
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
            </Modal>
            <List>
                <ListItem >
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Deadline -  ⏰" />
                </ListItem>
                <Button onClick={e => setOpen(true)}>EDIT</Button>
                <DeleteIcon style={{cursor: 'pointer', marginBottom: "-10px"}} onClick={event => db.collection('todos').doc(props.todo.id).delete()} /> 
            </List>
        </DIV>
    )
}

export default Todo;

const DIV = styled.div`
text-align: center !important;
border: 1px solid lightgray;
border-radius: 25px;
width: 60%;
margin: auto;
`