import { GET_ITEM } from "./actionTypes";

export const addItem = item => {
  return {
    type: GET_ITEM,
    payload: item
  };
};
