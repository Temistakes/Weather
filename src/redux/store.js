import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { thunk as thunkMiddleware } from "redux-thunk";
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export { store };