import {createStore} from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
 
const extension = composeWithDevTools();
const store = createStore(rootReducer,extension)

export default store