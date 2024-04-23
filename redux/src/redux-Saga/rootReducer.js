import { combineReducers } from "redux";
import userReducer from "./User/reducer/reducer";

let rootReducers = combineReducers({
    userReducer,
});
export default rootReducers;