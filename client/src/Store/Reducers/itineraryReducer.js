import { GET_ITINS, GET_ITINS_ERR } from "../Actions/actionTypes";

const initialState = [
  //cities: [],
  //itineraries:[],
  // loading: false
];

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITINS:
      console.log("GOT ITINS", action.payload);
      return {
        ...state,
        cities: action.payload
      };
    case GET_ITINS_ERR:
      console.log("err");
      return state;

    default:
      return state;
  }
};
export default cityReducer;
