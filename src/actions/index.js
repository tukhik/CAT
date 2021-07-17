import { GET_CATEGORIES, GET_IMAGES } from "./actionTypes";
import request from "./../requests/index";

export const getCategories = () => {
  const categoryUrl = "https://api.thecatapi.com/v1/categories";
  return (dispatch) => {
    request(categoryUrl)
      .then((res) => {
        dispatch({ type: GET_CATEGORIES, payload: res });
      })
      .catch((err) => {
        dispatch({ error: err.message });
      });
  };
};

export const getImages = (params = {}) => {
  let url = `https://api.thecatapi.com/v1/images/search?`;
  let query = "";

  for (let key in params) {
    let value = params[key];
    query = `${query}${key}=${value}&`;
  }

  const newItem = query.slice(0, -1);
  return (dispatch) => {
    request(url + newItem)
      .then((res) => {
        dispatch({ type: GET_IMAGES, payload: res });
      })
      .catch((err) => {
        dispatch({ error: err.message });
      });
  };
};
