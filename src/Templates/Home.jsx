import React from 'react'
import {makeStyles} from '@material-ui/styles'
import TopImage from '../assets/images/maedagumi5.jpg'


const useStyles = makeStyles({
  images: {
    maxHeight: '760px',
  },
  root: {
    overflow: 'scroll'
  }
})


const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <section >
        <img src={TopImage} alt='' className={classes.images}/>
      </section>
    </div>
  )
}

export default Home
