export const FETCH_BLOGS = 'FETCH_BLOGS'

export const fetchBlogsAction = (blogs) => {
  return {
    type: "FETCH_BLOGS",
    payload: blogs
  }
}
export const DELETE_BLOG = 'DELETE_BLOG'

export const deleteBlogAction = (blogs) => {
  return {
    type: "DELETE_BLOG",
    payload: blogs
  }
}