import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

/** Apply thunk middleware*/
export default createStore(rootReducer, applyMiddleware(thunk))