import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";

const rootReducer = combineReducers({
  citiesObj: cityReducer,
  itineraryObj: itineraryReducer
});
export default rootReducer;
