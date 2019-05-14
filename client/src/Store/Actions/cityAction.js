import {
  GET_CITIES,
  GET_CITIES_ERR,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "./actionTypes";
import axios from "axios";

export const getCities = () => {
  return dispatch => {
    axios
      .get("http://localhost:5000/api/cities/all")
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_CITIES,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_CITIES_ERR,
          payload: err
        })
      );
  };
};
