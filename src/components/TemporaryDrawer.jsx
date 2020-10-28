import React from 'react'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {makeStyles} from '@material-ui/styles'
import HomeIcon from '@material-ui/icons/Home';
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone';
import {useDispatch, useSelector} from 'react-redux'
import {push} from 'connected-react-router'
import CreateIcon from '@material-ui/icons/Create';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { signOut } from '../reducks/users/operations'
import {getSignedIn} from '../reducks/users/selectors'
import InputIcon from '@material-ui/icons/Input';
import LogInText from './LogInText'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const useStyles = makeStyles((theme) => ({
  drawer: {
      flexShrink: 0,
      width: 300
  },
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


const TemporaryDrawer = (props) => {
  const classes = useStyles()
  const {container} = props
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const signIn = getSignedIn(selector)
  
 
  

  const selectMenu = (event, path) => {
    dispatch(push(path))
    props.onClose(event)
  }
  
  const menus = [
    {func: selectMenu,label: "Home", icon: <HomeIcon/>, id: "home", value: "/"},
    {func: selectMenu,label: "Daisuke Ninomiya", icon: <PersonPinTwoToneIcon/>, id: "Member1", value: "/Member1"},
    {func: selectMenu,label: "Osamu Yamaguchi", icon: <PersonPinTwoToneIcon/>, id: "Member2", value: "/Member2"},
    {func: selectMenu,label: "Kyohei Yamamoto", icon: <PersonPinTwoToneIcon/>, id: "Member3", value: "/Member3"},
    {func: selectMenu,label: "Shovon Rahman Shuvo", icon: <PersonPinTwoToneIcon/>, id: "Member4", value: "/Member4"},
    {func: selectMenu,label: "Shintaro Yamamoto", icon: <PersonPinTwoToneIcon/>, id: "Member5", value: "/Member5"},
    {func: selectMenu,label: "Shota Nakashima", icon: <PersonPinTwoToneIcon/>, id: "Member6", value: "/Member6"}
  ]

  const selectContents = (event, path) => {
    dispatch(push(path))
    props.onClose(event)
  }

  const contents = [
    {func: selectContents,label: "Blog", icon: <CreateIcon/>, id: "Blog", value: "/blog"},
    // {func: selectContents,label: "Administrator only", icon: <FingerprintIcon/>, id: "Administrator", value: "/signin"}
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
            <h2 className={classes.linkTitle}>Member’s History</h2>
            {menus.map(menu => (
              <ListItem className={classes.menus} button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText className={classes.linkName} primary={menu.label}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            <h2 className={classes.linkTitle}>Contents</h2>
            {contents.map(content => (
              <ListItem className={classes.menus} button key={content.id} onClick={(e) => content.func(e, content.value)}>
                <ListItemIcon>
                  {content.icon}
                </ListItemIcon>
                <ListItemText className={classes.linkName} primary={content.label}/>
              </ListItem>
            ))}
          </List>
          
          {(signIn) ?
          <>
            <LogInText icon={<FingerprintIcon/>} signin={"Blog post"}  onClick={() => dispatch(push('/Administrator'))}/>
            <LogInText icon={<MeetingRoomIcon/>} signin={"signout"}  onClick={() => dispatch(signOut())}/>
          </>:
          <LogInText icon={<InputIcon/>} signin={"管理者専用ページ"}  onClick={() => dispatch(push('/signin'))}/>}
        </div>
      </Drawer>
    </nav>
  )
}

export default TemporaryDrawer
