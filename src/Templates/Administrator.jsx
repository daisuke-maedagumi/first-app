import React,{useState,useCallback} from 'react'
import {TextInput,SelectBox,PrimaryButton} from '../components/uiKid/index'
import {makeStyles} from '@material-ui/styles'
import { useDispatch } from 'react-redux'
import {saveBlogs} from '../reducks/blogs/operations'
import ImageArea from '../components/Blogs/ImageArea'

const useStyles = makeStyles({
  sections: {
    marginTop: '100px'
  },
  textHeadLine: {
    color: '#4dd0e1',
    fontSize: '1.563rem',
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
  }
})

const Administrator = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [title, setTitle]= useState('')
  const [text, setText] = useState('')
  const [member, setMember] = useState('')
  const [images, setImages] = useState([])

  const inputTitle = useCallback((e) => {
    setTitle(e.target.value)
  },[setTitle])

  const inputText = useCallback((e) => {
    setText(e.target.value)
  },[setText])

  const members = [
    {id: 'member1', name: 'Daisuke Ninomiya'},
    {id: 'member2', name: 'Osamu Yamaguchi'},
    {id: 'member3', name: 'Kyohei Yamamoto'},
    {id: 'member4', name: 'Shovon Rahman Shuvo'},
    {id: 'member5', name: 'Shintaro Yamamoto'},
    {id: 'member6', name: 'Shota Nakashima'}
  ]
  return (
    <section className={classes.sections}>
      <h1 className={classes.textHeadLine}>Administrator Pages</h1>
      <div className={classes.container}>
        <ImageArea images={images} setImages={setImages}/>
        <TextInput
        fullWidth={true} label={'Title'} multiline={false} required={true}
        onChange={inputTitle} rows={1} value={title} type={'text'}
        />
        <TextInput
        fullWidth={true} label={'Text'} multiline={true} required={true}
        onChange={inputText} rows={5} value={text} type={'text'}
        />
        <SelectBox
          required={true} label={'writing member'} options={members} select={setMember} value={member}
        />
        <div className={classes.spaceM}/>
        <div>
          <PrimaryButton
          label={'Post a blog'}
          onClick={() => dispatch(saveBlogs(title,text,member))}/>
        </div>
      </div>
    </section>
  )
}

export default Administrator
