import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import photos from './photos';

const rootReducer = combineReducers({
  form: formReducer,
  photos
})

export default rootReducer;