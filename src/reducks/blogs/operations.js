import { push } from 'connected-react-router'
import {db, FirebaseTimestamp} from '../../firebase/index'
import {fetchBlogsAction, deleteBlogAction} from './actions'

const blogsRef = db.collection('blogs')

export const fetchBlogs = () => {
  return async (dispatch) => {
    blogsRef.orderBy('updated_at', 'desc').get().then(snapshots => {
      const blogList = []
      snapshots.forEach(snapshot => {
        const blog = snapshot.data()
        blogList.push(blog)
      })
      dispatch(fetchBlogsAction(blogList))
    })
  }
}

export const deleteBlog = (id) => {
  return async (dispatch, getState) => {
    blogsRef.doc(id).delete()
    .then(() => {
      const prevBlogs = getState().blogs.list
      const nextBlogs = prevBlogs.filter(blog => blog.id !== id)
      dispatch(deleteBlogAction(nextBlogs))
    })
  }
}

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

export const saveEditBlogs = (id,title,text,member,images) => {
  return async (dispatch) => {
    const timeStamp = FirebaseTimestamp.now()

    const data = {
      title: title,
      text: text,
      member: member,
      images: images,
      updated_at: timeStamp
    }
    
    return blogsRef.doc(id).set(data, {merge: true})
          .then(() => {
            dispatch(push('/'))
          }).catch((error) => {
            throw new Error(error)
          })
  }
}