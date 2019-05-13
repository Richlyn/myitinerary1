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

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case GET_ITEMS:
//       return {
//         ...state
//       };
//     default:
//       return state;
//   }
// }
// const myObjectReducer = (state = initState, action) => {
//     return state
// }

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      console.log("added city", action.payload.name);
      return [
        ...state,
        {
          name: action.payload.name,
          dateStamp: new Date()
        }
      ];
    case ADD_ITEM:
      console.log("added city", action.payload.name);
      return [
        ...state,
        {
          name: action.payload.name,
          dateStamp: new Date()
        }
      ];
    case DELETE_ITEM:
      console.log("deleted city", action.payload.name);
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
export default cityReducer;
