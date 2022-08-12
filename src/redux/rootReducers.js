import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import sidexReducer from "./sidex/sidexReducer";


const reducers = combineReducers({
    userReducer,
    sidexReducer
});

export default reducers;