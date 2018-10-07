import {combineReducers} from 'redux'
import {HELLO_WORLD,RESET} from "../actions";

let initalState = {message: "Hello"}

const helloWorld = (state=initalState, action) => {
    switch (action.type) {
        case HELLO_WORLD:
            return Object.assign({}, state, {message: "Hello, World!"})
        case RESET:
            return state = initalState
        default:
            return state
    }
}
 const helloReducer = combineReducers({helloWorld})

export default helloReducer