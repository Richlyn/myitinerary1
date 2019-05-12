import { combineReducers } from "redux";
import firstReducer from "./firstReducer";

const rootReducer = combineReducers({
  myItems: firstReducer
});

export default rootReducer;
