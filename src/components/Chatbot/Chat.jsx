import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../../assets/images/no-profile.png';
import Kyohei from '../../assets/images/kyohei.jpg';


const Chat = (props) => {
    const isQuestion = (props.type === 'question')
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={Kyohei} />
                ) : (
                    <Avatar alt="icon" src={NoProfile} />
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat

