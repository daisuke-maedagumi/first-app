import * as Actions from './actions'
import initialState from '../store/initialState'

export const BlogsReducer = (state = initialState.blogs, action) => {
  switch(action.type) {
    case Actions.FETCH_BLOGS: 
      return {
        ...state,
        list: [...action.payload]
      }
    default:
      return state
  }
}