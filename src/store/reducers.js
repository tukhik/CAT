import { combineReducers } from "redux";
import { GET_IMAGES } from "../actions/actionTypes";
import { GET_CATEGORIES } from "../actions/actionTypes";

const initStateCategory = {
  categories: [],
};

const categoryReducer = (state = initStateCategory, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};


const initStateImages = {
  images: [],
  params: {
    limit: 10,
    page: 1,
    category_ids: null,
  },
};

const imageReducer = (state = initStateImages, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: [...action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
  imageReducer: imageReducer,
});

export default rootReducer;
