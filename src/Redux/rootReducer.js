import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import contactReducer from './Contact/ContactReducer';
import imageReducer from './Image/imageReducer'

const rootReducer = combineReducers({IR:imageReducer, CR:contactReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;