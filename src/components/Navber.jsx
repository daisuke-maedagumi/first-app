import React,{useState, useCallback} from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TemporaryDrawer from './TemporaryDrawer'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    marginRight: theme.spacing(2),
    backgroundColor: 'gray',
    display: 'flex'
  }
}))

const Navber = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawerToglge = useCallback((event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return 
    }
    setOpen(!open)
  },[setOpen, open])
  return (
    <div>
      <AppBar className={classes.BarColor} position="static">
        <ToolBar >
          <IconButton edge="start" className={classes.menuIcon} onClick={(event) => handleDrawerToglge(event)}>
            <MenuIcon className={classes.icon}/>
          </IconButton>
          <Typography className={classes.linkTitle}>
            <p className={classes.linkName} >Team Engineers</p>
          </Typography>
        </ToolBar>
      </AppBar>
      <TemporaryDrawer open={open} onClose={handleDrawerToglge}/>
    </div>
    
  )
}

export default Navber
