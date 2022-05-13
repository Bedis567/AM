import { combineReducers } from "redux";
import ProfileReducer from "./profile_reducer";


// Root Reducer
const rootReducer = combineReducers({
 profile : ProfileReducer
});

export default rootReducer;