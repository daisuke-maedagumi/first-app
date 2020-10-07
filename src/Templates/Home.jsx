import React from 'react'
import {makeStyles} from '@material-ui/styles'
import TopImage from '../assets/images/maedagumi5.jpg'



const useStyles = makeStyles({
  images: {
    height: '800px',
    width: "100%",
  },
  sections: {
    width: "100%",
    height: "100%",
    marginTop: '30px'
  }
})


const Home = () => {
  const classes = useStyles()
  return (
    <div>
      <section className={classes.sections}>
        <img src={TopImage} alt='' className={classes.images}/>
      </section>
    </div>
  )
}

export default Home
