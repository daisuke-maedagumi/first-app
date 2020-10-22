import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogItem from '../components/Blogs/BlogItem'
import {fetchBlogs} from '../reducks/blogs/operations'
import {getBlogs} from '../reducks/blogs/selectors'

const Blogs = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const blogs = getBlogs(selector)
  useEffect(() => {
    dispatch(fetchBlogs())
  },[])
  return (
    <div>
      {blogs.length > 0 && (
        blogs.map(blog => (
          <BlogItem key={blog.id}
          id={blog.id}
          images={blog.images}
          title={blog.title}
          member={blog.member}
          />
        ))
      )}
    </div>
  )
}

export default Blogs
