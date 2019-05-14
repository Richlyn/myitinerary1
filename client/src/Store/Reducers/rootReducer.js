import { combineReducers } from "redux";
import cityReducer from "./cityReducer";

const rootReducer = combineReducers({
  citiesObj: cityReducer
});
export default rootReducer;
