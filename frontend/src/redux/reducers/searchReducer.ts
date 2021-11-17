import {
  SET_DETAIL,
  SET_SEARCH_DETAILS,
} from "../actionTypes/searchActionTypes";

import { ISearchState } from "../../redux/types/SearchState";

export const initialState: ISearchState = {
  loading: false,
  searchList: [],
  selectedList: undefined,
};

export const searchDetailsReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEARCH_DETAILS:
      return {
        ...state,
        searchList: action.payload,
      };
    case SET_DETAIL:
      return {
        ...state,
        selectedList: action.payload,
      };
    default:
      return state;
  }
};
