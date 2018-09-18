import localeReducer from "./localisation/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  locale: localeReducer,
});

export default rootReducer;
