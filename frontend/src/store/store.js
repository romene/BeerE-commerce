import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { loadState, saveState} from './localstorage'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk]
const persistedState = loadState()
const store = createStore(
    rootReducer,
    persistedState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

window.store = store

//persist to local store

store.subscribe(() => {
    saveState(store.getState())
})


export default store