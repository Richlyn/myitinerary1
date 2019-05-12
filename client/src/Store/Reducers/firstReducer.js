const initState = [
  {
    name: "dummy",
    dateStamp: new Date()
  },
  {
    name: "data",
    dateStamp: new Date()
  }
];

// const myObjectReducer = (state = initState, action) => {
//     return state
// }

const firstReducer = (state = initState, action) => {
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

export default firstReducer;
