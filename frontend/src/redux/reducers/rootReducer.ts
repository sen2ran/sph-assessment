import { combineReducers } from "redux";
import { RootState } from "./state";
import { searchDetailsReducers } from "./searchReducer";

export const rootReducer = combineReducers<RootState>({
  searchDetail: searchDetailsReducers,
});
