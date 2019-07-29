import  rootReducer  from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from "./epics";
import { createLogger } from 'redux-logger'

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
    const store = createStore(
        rootReducer(),
        applyMiddleware(epicMiddleware, createLogger())
    );

    epicMiddleware.run(rootEpics);

    return store;
};

export default configureStore