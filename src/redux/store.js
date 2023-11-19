import { createStore,combineReducers,applyMiddleware} from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"



const Store=createStore(reducers,{}, composeWithDevTools( applyMiddleware(thunk)));
export default Store;