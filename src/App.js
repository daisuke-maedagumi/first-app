import React from 'react';
import Router from './Router.jsx'
import Navber from './components/Navber.jsx'
import {makeStyles} from '@material-ui/styles'



const useStyles = makeStyles({
  nav: {
    position: 'fixed',
    top: 0
  },
  sections: {
    overflow: 'scroll'
  },
  switches: {
    marginTop: '100px'
  }
})






function App() {
  const classes = useStyles()

  return (
    <div>
      <Navber className={classes.nav}/>
      <Router className={classes.sections}/> 
    </div>
  );
}

export default App;
