import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState } from "../reducers/state";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";


export const configureStore = (initialState?: RootState): Store<RootState> => {
  let middleware = applyMiddleware(thunk);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }
  return createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<RootState>;
};
