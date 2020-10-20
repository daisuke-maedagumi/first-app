import React,{useCallback} from 'react'
import {makeStyles} from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {storage} from '../../firebase/index'
import ImagePreview from '../Blogs/ImagePreview'

const useStyles = makeStyles({
  textRight: {
    textAlign: 'right'
  },
  displayNone: {
    display: 'none'
  },
  icon: {
    height: 48,
    width: 48
  }
})

const ImageArea = (props) => {
  const classes = useStyles()

  const uploadImages = useCallback((e) => {
    const file = e.target.files;
    let blob = new Blob(file, { type: "image/jpeg" });

    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N=16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

    const uploadRef = storage.ref('images').child(fileName);
    const uploadTask = uploadRef.put(blob);
    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        const newImage = {id: fileName, path: downloadURL};
        props.setImages((prevState => [...prevState, newImage]))
      })
    })
  },[props.setImages])
  return (
    <div>
      <div className="p-grid__list-images">
        {props.images.length > 0 && (
          props.images.map(image => <ImagePreview id={image.id} path={image.path} key={image.id}/>)
        )}
      </div>
      <div className={classes.textRight}>
        <span>画像を追加</span>
        <IconButton className={classes.icon}>
          <label>
            <AddAPhotoIcon/>
            <input className={classes.displayNone} type="file" id="image"
            onChange={(e) => uploadImages(e)}/>
          </label>
        </IconButton>
      </div>
    </div>
  )
}

export default ImageArea
