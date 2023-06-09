import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers if needed
});

export default rootReducer;
