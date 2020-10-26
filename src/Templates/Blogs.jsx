import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogItem from '../components/Blogs/BlogItem'
import {fetchBlogs} from '../reducks/blogs/operations'
import {getBlogs} from '../reducks/blogs/selectors'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '150px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '50px',
    fontSize: '50px'
  },
  
});

const Blogs = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const blogs = getBlogs(selector)
  useEffect(() => {
    dispatch(fetchBlogs())
  },[])
  return (
    <Container maxWidth="sm" className={classes.root}>
      <h1 className={classes.title}>Engineers Blog</h1>
        {blogs.length > 0 && (
          blogs.map(blog => (
            <BlogItem key={blog.id}
            id={blog.id}
            images={blog.images}
            title={blog.title}
            member={blog.member}
            createdAt={(blog.created_at.toDate())}
            />
          
          ))      
        )}
    </Container>
  )
}

export default Blogs
