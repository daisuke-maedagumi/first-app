import { push } from 'connected-react-router'
import {db, FirebaseTimestamp} from '../../firebase/index'

const blogsRef = db.collection('blogs')

export const saveBlogs = (title,text,member,images) => {
  return async (dispatch) => {
    const timeStamp = FirebaseTimestamp.now()

    const data = {
      title: title,
      text: text,
      member: member,
      images: images,
      updated_at: timeStamp
    }
    const ref = blogsRef.doc()
    const id = ref.id
    data.id = id
    data.created_at = timeStamp

    return blogsRef.doc(id).set(data)
          .then(() => {
            dispatch(push('/'))
          }).catch((error) => {
            throw new Error(error)
          })
  }
}