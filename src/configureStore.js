import  rootReducer  from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from "./epics";

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpics);

    return store;
};

export default configureStore