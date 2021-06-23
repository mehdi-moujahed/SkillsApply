import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { testReducer } from "./reducer/test";
import { todos } from "./reducer/auth";
import { candidateReducer } from "./reducer/candidate";

const rootReducer = combineReducers({
  todos,
  testReducer,
  candidateReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
