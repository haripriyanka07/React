import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import {contactReducer} from './Contact/contactReducer';
import {imageReducer} from './Image/imageReducer'

const rootReducer = combineReducers({imageReducer:imageReducer, contactReducer:contactReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;