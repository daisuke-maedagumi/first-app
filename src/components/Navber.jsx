import React,{useState, useCallback} from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TemporaryDrawer from './TemporaryDrawer'

const useStyles = makeStyles({
  linkTitle: {
    margin: 'auto'
  },
  linkName: {
    padding: '0 20px',
    textDecoration: 'none',
    fontSize: '18px',
    color: 'white',
    cursor: 'pointer'
  },
  BarColor: {
    backgroundColor: 'gray'
  }
})

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
        <ToolBar>
          <Typography className={classes.linkTitle}>
            <p className={classes.linkName} onClick={(event) => handleDrawerToglge(event)}>Open The Menu</p>
          </Typography>
        </ToolBar>
      </AppBar>
      <TemporaryDrawer open={open} onClose={handleDrawerToglge}/>
    </div>
    
  )
}

export default Navber
