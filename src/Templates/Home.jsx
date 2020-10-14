import React,{useState} from 'react'
import {Images,TopText,SecondText,ThirdText,EndText,Copywriter} from '../components/homekit/index'
import Switch from '@material-ui/core/Switch';
import GTranslateSharpIcon from '@material-ui/icons/GTranslateSharp';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  sections: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  icons: {
    color: 'rgb(29, 161, 242)',
    fontSize: '30px',
    paddingTop: '3px'
    
  },
  switches: {
    paddingBottom: '30px'
  }
  
})


const Home = () => {
  const [checkbox, setCheckbox] = useState('false')
  const classes = useStyles()
  const handlecheckBox = () => {
    setCheckbox(!checkbox)
  }
  
  
  return (
    <div>
      <Images/>
      <div className={classes.sections}>
        <Switch
          onClick={handlecheckBox}
          color="primary"
          // name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <div><GTranslateSharpIcon className={classes.icons}/></div>
        
      </div>
      <TopText checkbox={checkbox}/>
      <SecondText checkbox={checkbox}/>
      <ThirdText checkbox={checkbox}/>
      <EndText checkbox={checkbox}/>
      <Copywriter checkbox={checkbox}/>
    </div>
  )
}

export default Home
