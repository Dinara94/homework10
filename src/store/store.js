import { createStore, combineReducer } from "redux";
import reducers from "./reducers/reducers";


const rootReducer = combineReducer({
    reducers: reducers
})


export default createStore(reducers);