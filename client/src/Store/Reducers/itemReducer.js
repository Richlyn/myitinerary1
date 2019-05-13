import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../Actions/actionTypes";

const initialState = {
  items: [
    { id: uuid(), name: "barcelona" },
    { id: uuid(), name: "berlin" },
    { id: uuid(), name: "boston" },
    { id: uuid(), name: "birmingham" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
// const myObjectReducer = (state = initState, action) => {
//     return state
// }

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEM":
      console.log("added item", action.payload.name);
      return [
        ...state,
        {
          name: action.payload.name,
          dateStamp: new Date()
        }
      ];
    case "DELETE":
      console.log("added item", action.payload.name);
      return [
        ...state,
        {
          name: action.payload.name,
          dateStamp: new Date()
        }
      ];
    default:
      return state;
  }
};
