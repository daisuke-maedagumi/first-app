import React,{useState, useCallback} from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TemporaryDrawer from './TemporaryDrawer'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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
    display: 'flex',
    
    
  },
  wrap: {
    width: '2000px'
  }
}))

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

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
    <div >
      <ElevationScroll {...props}>
      <AppBar className={classes.BarColor} position='static'>
        <ToolBar >
          <IconButton edge="start" className={classes.menuIcon} onClick={(event) => handleDrawerToglge(event)}>
            <MenuIcon className={classes.icon}/>
          </IconButton>
          <Typography className={classes.linkTitle}>
            <p className={classes.linkName} >Team Engineers</p>
          </Typography>
        </ToolBar>
      </AppBar>
      </ElevationScroll>
      <TemporaryDrawer open={open} onClose={handleDrawerToglge}/>
    </div>
    
  )
}

export default Navber
