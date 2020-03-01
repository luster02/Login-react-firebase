import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import { loginReducer } from './ducks/loginDuck'
import { getSesionAction, loadFirebaseAction } from './actions/loginActions'

const rootReducer = combineReducers({
    login: loginReducer
})

const middlewares = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const generateStore = () => {
    const store = createStore(rootReducer, composeEnhancers(middlewares))
    loadFirebaseAction()(store.dispatch, store.getState)
    getSesionAction()(store.dispatch, store.getSate) 
    return store;
}