import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'

import {BlogsReducer} from '../blogs/reducers'
import {MemberReducer} from '../members/reducers'


export default function createStore (history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      member: MemberReducer,
      blogs: BlogsReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}