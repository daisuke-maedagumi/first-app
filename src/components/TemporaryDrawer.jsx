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
import {useDispatch} from 'react-redux'
import {push} from 'connected-react-router'

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
  const dispatch = useDispatch()

  const selectMenu = (event, path) => {
    dispatch(push(path))
    props.onClose(event)
  }
  
  const menus = [
    {func: selectMenu,label: "Home", icon: <HomeIcon/>, id: "home", value: "/"},
    {func: selectMenu,label: "Member1", icon: <PersonPinTwoToneIcon/>, id: "Member1", value: "/Member1"},
    {func: selectMenu,label: "Member2", icon: <PersonPinTwoToneIcon/>, id: "Member2", value: "/Member2"},
    {func: selectMenu,label: "Member3", icon: <PersonPinTwoToneIcon/>, id: "Member3", value: "/Member3"},
    {func: selectMenu,label: "Member4", icon: <PersonPinTwoToneIcon/>, id: "Member4", value: "/Member4"}
  ]
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
            {menus.map(menu => (
              <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText className={classes.linkName} primary={menu.label}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
        </div>
      </Drawer>
    </nav>
  )
}

export default TemporaryDrawer
