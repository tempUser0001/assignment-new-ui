/**
 * ## index
 * @reducers
 * combines redux reducers
 */
import albums from "./albums";
import { combineReducers } from "redux";

const reducers = combineReducers({ albums });

export default reducers;
