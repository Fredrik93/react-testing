import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers/index';

export const middleWares = [ReduxThunk];

export const createStoreWithMiddleware  = applyMiddleware(...middleWares)(createStore)

export const store = createStoreWithMiddleware(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());