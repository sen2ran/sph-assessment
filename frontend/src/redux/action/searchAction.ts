import {
  SET_DETAIL,
  SET_SEARCH_DETAILS,
} from "../actionTypes/searchActionTypes";

export const setSearchList = (data: any) => {
  return {
    type: SET_SEARCH_DETAILS,
    payload: data,
  };
};

export const setDetails = () => {
  return {
    type: SET_DETAIL,
  };
};
