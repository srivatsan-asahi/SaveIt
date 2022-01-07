import { combineReducers } from "redux";
import CounterReducer from "./counterreducer";



let rootReducer = combineReducers({
    CounterReducer: CounterReducer
})

export default (state, action) => {
    return rootReducer(state, action)
}