/**
 * ## store
 * initialise redux store
 */
import { createStore } from "redux";
import reducers from "./reducers";

export default initialState => createStore(reducers, initialState);
