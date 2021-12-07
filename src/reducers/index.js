import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import signIn from "./login";
import Tasks from "./tasks";


const reducer = combineReducers({ signIn , Tasks });

const store = () => {
  return createStore(reducer, composeWithDevTools());
};

export default store();