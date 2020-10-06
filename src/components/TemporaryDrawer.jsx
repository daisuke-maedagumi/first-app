import React from 'react'
import {Link} from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {makeStyles} from '@material-ui/styles'
import HomeIcon from '@material-ui/icons/Home';
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone';

const useStyles = makeStyles((theme) => ({
  drawer: {
      flexShrink: 0,
      width: 256
  },
  linkName: {
    textDecoration: 'none',
    fontSize: '18px',
    color: 'orange'
  },
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 256
  }
}))


const TemporaryDrawer = (props) => {
  const classes = useStyles()
  const {container} = props
  return (
    <nav className={classes.drawer}>
      <Drawer
        container={container}
        variant='temporary'
        anchor='right'
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{paper: classes.drawerPaper}}
        ModalProps={{keepMounted: true}}
      >
        <div>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText>
                <Link to="/" className={classes.linkName}>Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonPinTwoToneIcon/>
              </ListItemIcon>
              <ListItemText>
                <Link to="/Member1" className={classes.linkName}>Member1</Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonPinTwoToneIcon/>
              </ListItemIcon>
              <ListItemText>
                <Link to="/Member2" className={classes.linkName}>Member2</Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonPinTwoToneIcon/>
              </ListItemIcon>
              <ListItemText>
                <Link to="/Member3" className={classes.linkName}>Member3</Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonPinTwoToneIcon/>
              </ListItemIcon>
              <ListItemText>
                <Link to="/Member4" className={classes.linkName}>Member4</Link>
              </ListItemText>
            </ListItem>
          </List>
          <Divider/>
        </div>
      </Drawer>
    </nav>
  )
}

export default TemporaryDrawer
