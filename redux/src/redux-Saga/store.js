import { applyMiddleware, createStore } from "redux";
import rootReducers from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import {composeWithDevTools} from "@redux-devtools/extension";
import rootSaga from "./Saga";


let sagaMiddleware=createSagaMiddleware();
const store = createStore(
    rootReducers,
    // applyMiddleware(sagaMiddleware)
    composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

export default store