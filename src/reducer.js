import { combineReducers } from "redux";
import localeReducer from "./localisation/reducer";

const rootReducer = combineReducers({
    locale: localeReducer,
});

export default rootReducer;
