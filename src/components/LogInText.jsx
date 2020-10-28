import React from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {makeStyles} from '@material-ui/styles'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles((theme) => ({
    
    linkName: {
      textDecoration: 'none',
      fontSize: '18px',
      color: 'orange',
      '&:hover': {
        color: 'rgb(29, 161, 242)'
      }
    },
    drawerPaper: {
      width: 256
    },
    linkTitle: {
      textAlign: 'center'
    },
    menus: {
      marginLeft: '6px'
    }
  }))



const LogInText = (props) => {
    const classes = useStyles()

    return (
        <div>
            <ListItem className={classes.menus} button onClick={props.onClick} > 
                <ListItemIcon>
                {props.icon}
                </ListItemIcon>
                <ListItemText className={classes.linkName} primary={props.signin} />
            </ListItem> 
        </div>
        
        
    )
}


export default LogInText