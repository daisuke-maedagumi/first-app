import {createSelector} from 'reselect'

const blogsSelector = (state) => state.blogs

export const getBlogs = createSelector(
  [blogsSelector],
  state => state.list
)