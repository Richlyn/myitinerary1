//import uuid from "uuid";
import {
  GET_CITIES,
  GET_CITIES_ERR,
  ADD_ITEM,
  DELETE_ITEM
} from "../Actions/actionTypes";

const initialState = [
  // cities: [],
  // loading: false
];

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      console.log("GOT CITIES", action.payload);
      return {
        ...state,
        cities: action.payload
      };
    case GET_CITIES_ERR:
      console.log("err");
      return state;
    // case ADD_ITEM:
    //   console.log("added city", action.payload.name);
    //   return [
    //     ...state,
    //     {
    //       name: action.payload.name,
    //       dateStamp: new Date()
    //     }
    //   ];
    // case DELETE_ITEM:
    //   console.log("deleted city", action.payload.name);
    //   return [
    //     ...state,
    //     {
    //       name: action.payload.name,
    //       dateStamp: new Date()
    //     }
    //   ];
    default:
      return state;
  }
};
export default cityReducer;
