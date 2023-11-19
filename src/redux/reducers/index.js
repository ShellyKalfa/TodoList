import {combineReducers} from "redux"
import TodoReducer from "./dataReducers"

const  reducers=combineReducers({
  Todo: TodoReducer
})
export default reducers;
