import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NoProfile from '../assets/img/no-profile.png'
import Author from '../assets/img/author.png'

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    /**どっちのchatなのか判別 */
    const classes = isQuestion ? "p-chat__row": "p-chat__reverse";

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={Author}></Avatar>
                ) : (
                    <Avatar alt="icon" src={NoProfile}></Avatar>
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat;