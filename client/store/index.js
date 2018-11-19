import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import user from './user'
import article from './article'

const blog = combineReducers({ user, article })
const logger = createLogger({
  collapsed: true,
})
const store = createStore(blog, applyMiddleware(thunk, logger))

export default store

export * from './user'
export * from './article'
