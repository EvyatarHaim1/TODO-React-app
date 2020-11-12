import React from 'react';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import styled from 'styled-components';

function Todo(props) {
    return (
        <DIV>
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.text} secondary="Deadline ⏰" />
                </ListItem>
            </List>
        </DIV>
    )
}

export default Todo;

const DIV = styled.div`
text-align: center !important;`