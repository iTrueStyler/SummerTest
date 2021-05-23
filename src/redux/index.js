import {combineReducers} from 'redux';
import {createStore,applyMiddleware} from 'redux';
import reposReducer from './reducers/reposReducer.js';
import userReducer from './reducers/usersReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   repos: reposReducer,
   users: userReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))