import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  mediaImage: {
    position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'center',
    top: 0,
    width: '100%',
    height: 'auto'
  }
})

const ImagePreview = (props) => {
  const classes = useStyles()
  return (
    <div className="p-media__thumb">
      <img alt="プレビュー" src={props.path}/>
    </div>
  )
}

export default ImagePreview
