import React,{useState, useCallback} from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TemporaryDrawer from './TemporaryDrawer'
import IconButton from '@material-ui/core/IconButton';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Link} from 'react-router-dom'
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import TransitionsModal from './ChatBotModal'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MailModal from './MailModal'

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    width: 30,
    height: 30,
    color: 'white',
    marginLeft: 35
  },
  icon:{
    width:30,
    height: 30
  },
  linkName: {
    padding: '0 20px',
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  BarColor: {
    backgroundColor: 'gray',
    display: 'flex',
    width: '100%'
  },
  root: {
    width: '100vw',
    flexGrow: 1,
  }
}))


const Navber = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleMailOpen = () => {
    setMailOpen(true)
  }

  const handleMailClose = () => {
    setMailOpen(false)
  }


  const handleDrawerToglge = useCallback((event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return 
    }
    setOpen(!open)
  },[setOpen, open])
  return (
    <div className={classes.root}>
      <AppBar className={classes.BarColor} >
        <ToolBar >
          <Typography className={classes.linkTitle}>
            <Link to='/' className={classes.linkName} >Team Engineers</Link>
          </Typography>
          <IconButton edge="start" className={classes.menuIcon} onClick={(event) => handleDrawerToglge(event)}>
            <MenuBookIcon className={classes.icon}/>
          </IconButton>
          <IconButton className={classes.menuIcon} onClick={handleModalOpen}>
            <ContactSupportOutlinedIcon className={classes.icon} />
          </IconButton>
          <IconButton className={classes.menuIcon} onClick={handleMailOpen}>
            <MailOutlineIcon className={classes.icon}/>
          </IconButton>
        </ToolBar>
      </AppBar>
      <TemporaryDrawer open={open} onClose={handleDrawerToglge}/>
      <TransitionsModal modalOpen={modalOpen} handleModalClose={handleModalClose}/>
      <MailModal mailOpen={mailOpen} handleMailClose={handleMailClose}/>
    </div>
    
  )
}

export default Navber
