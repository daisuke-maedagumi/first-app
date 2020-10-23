import React,{useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import { useDispatch } from 'react-redux'
import Detailimag from '../components/Blogs/DetailImag'
import {db} from '../firebase/index'
import { push } from 'connected-react-router'
import TextArea from '../components/Blogs/TextArea'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  sections: {
    marginTop: '100px'
  },
  textHeadLine: {
    margin: '0 auto 1rem auto',
    textAlign: 'center'
  },
  container: {
    margin: '0 auto',
    maxWidth: '400px',
    padding: '1rem',
    height: 'auto',
    width: 'calc(100% - 2rem)'
  },
  spaceM: {
    height: '48px'
  },
  textHead: {
    margin: '0 auto 1rem auto',
    textAlign: 'center'
  }
})

const BlogsDetails = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  let id = window.location.pathname.split('/Blogs/detail')[1]
  if(id !== "") {
    id = id.split("/")[1]
  }

  const [title, setTitle]= useState('')
  const [text, setText] = useState('')
  const [member, setMember] = useState('')
  const [images, setImages] = useState([])



  const members = [
    {id: 'Daisuke Ninomiya', name: 'Daisuke Ninomiya'},
    {id: 'Osamu Yamaguchi', name: 'Osamu Yamaguchi'},
    {id: 'Kyohei Yamamoto', name: 'Kyohei Yamamoto'},
    {id: 'Shovon Rahman Shuvo', name: 'Shovon Rahman Shuvo'},
    {id: 'Shintaro Yamamoto', name: 'Shintaro Yamamoto'},
    {id: 'Shota Nakashima', name: 'Shota Nakashima'}

  ]

  useEffect(() => {
    if (id !== "") {
      db.collection('blogs').doc(id).get()
        .then(snapshot => {
          const data = snapshot.data()
          setTitle(data.title)
          setText(data.text)
          setMember(data.member)
          setImages(data.images)
        })
    }
  },[id])
  

  return (
    <section className={classes.sections}>
     <Typography className={classes.textHeadLine}variant="h3" gutterBottom>{title}</Typography> 
      <div className={classes.container}>
      <Detailimag images={images} setImages={setImages}/>
      <TextArea text={text}/>
        <p>{'ライター'  + member}</p>
        <p onClick={() => dispatch(push('/blog'))}>Back</p>
      </div>
    </section>
  )
}

export default BlogsDetails