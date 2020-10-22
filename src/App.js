import React from 'react';
import Router from './Router.jsx'
import Navber from './components/Navber.jsx'
import {makeStyles} from '@material-ui/styles'
import {useDispatch, useSelector} from "react-redux"
import { signInAction } from './reducks/members/actions.js';



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
  const dispatch = useDispatch()
  const selector  = useSelector((state) => state) 
  console.log(selector.member)
  const classes = useStyles()

  return (
    <div>
      <Navber className={classes.nav}/>
      <Router className={classes.sections}/> 
      <button onClick={() => dispatch(signInAction({uid: "00001", memberName: "daisuke"})) }>
        Sign In
      </button>   
    </div>

  );
}

export default App;
