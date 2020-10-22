export const FETCH_BLOGS = 'FETCH_BLOGS'

export const fetchBlogsAction = (blogs) => {
  return {
    type: "FETCH_BLOGS",
    payload: blogs
  }
}