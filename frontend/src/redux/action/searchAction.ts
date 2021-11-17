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

export const setDetails = (data: any) => {
  return {
    type: SET_DETAIL,
    payload: data,
  };
};

export const setLoading = (data: boolean) => {
  return {
    type: SET_DETAIL,
    payload: data,
  };
};
