import React from 'react'
// import {makeStyles} from '@material-ui/styles'
// import TopImage from '../assets/images/maedagumi5.jpg'
import {Images,TopText,SecondText,ThirdText,EndText,Copywriter} from '../components/homekit/index'




// const useStyles = makeStyles({
//   root: {
//     height: '100%',
//     width: "100%",
    
//   },
//   images: {
//     height: '100%',
//     width: "100%",
//     paddingTop: '24px'
//   },
//   sections: {
//     width: "100%",
//     height: "100%",
//     marginTop: '30px'
//   }
// })


const Home = () => {
  // const classes = useStyles()
  return (
    <div>
      <Images/>
      <TopText/>
      <SecondText/>
      <ThirdText/>
      <EndText/>
      <Copywriter/>
    </div>
  )
}

export default Home
