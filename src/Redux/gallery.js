import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import imageReducer from './Image/imageReducer'

const gallery = createStore(imageReducer, applyMiddleware(thunk))

export default gallery;