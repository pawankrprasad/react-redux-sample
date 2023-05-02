
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const INCREMENT = "Increment";
const DECREMENT = "Decrement";
const INCREMENTBY = "IncrementBy";

const LOGIN = "LogIn";
const LOGOUT = "LogOut"


export const action_increment = () => ({type: INCREMENT});
export const action_decrement = () => ({type: DECREMENT});
export const action_incrementBy = (payload) => ({type: INCREMENTBY, payload});


export const action_Login = (payload) => ({type:LOGIN, payload})
export const action_LogOut = () => ({type:LOGOUT})

const counterReducer = (state = { value: 0}, action) =>{
    const { type, payload } = action;
    if(type==INCREMENT){
         return {
            value: state.value +1
         }
    }
    else if(type==DECREMENT){
     return {
        value: state.value - 1
     }
     }
     else if(type==INCREMENTBY){
        return {
            value: state.value + payload
        }
        }
     else{
         return {
             ...state
         }
     }
 }

const authInitialState = {
    loggedIn: false,
    user: ""
}
 const authReducer = (state = authInitialState, action) =>{
    const { type, payload } = action;
    if(type==LOGIN){
         return {
            ...state,
            loggedIn: true,
            user: payload
         }
    }
    else if(type==LOGOUT){
     return {
        ...state,
        loggedIn: false,
        user:""
     }
     }else{
        return {
            ...state
        }
     }
 }

 const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
 });

 const store = createStore(rootReducer , composeWithDevTools())

 export default store;