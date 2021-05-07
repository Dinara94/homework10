import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/reducers";

import logger from "redux-logger";
import thunk from "redux-thunk";

const enchancer = applyMiddleware(thunk, logger);

export default createStore(reducers, enchancer);