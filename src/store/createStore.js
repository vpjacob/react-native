import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import reducers from '../reducers/reducerIndex';

const navMiddleware = createReactNavigationReduxMiddleware("root",state => state.nav);
/*
* 中间件组合
* */
const middlewares = [thunk.withExtraArgument(),navMiddleware];
/*
* 
* */
const middleware = applyMiddleware(...middlewares);
/*
* 将所有的reducer结合成一个大reducer
* */
export default (preloadState = {}) => {
    const rootReducer = combineReducers({
            ...reducers
        });
    return createStore(rootReducer,preloadState,middleware);
}