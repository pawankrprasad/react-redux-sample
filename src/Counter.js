// import { useReducer, useState } from "react"

import { useDispatch, useSelector } from "react-redux";
import { counterActions } from './store'


// const INCREMENT = "Increment";
// const DECREMENT = "Decrement";


// const action_increment = () => ({type: INCREMENT});
// const action_decrement = () => ({type: DECREMENT});


// const counterReducer = (state, action) =>{
//    const { type, payload } = action;
//    if(type==INCREMENT){
//         return {
//            counter: state.counter +1
//         }
//    }
//    else if(type==DECREMENT){
//     return {
//        counter: state.counter - 1
//     }
//     }
//     else{
//         return {
//             ...state
//         }
//     }
// }



const Counter = () =>{
    
    // const [state, dispatch] =  useReducer(counterReducer, {counter: 0} )
   const counter =  useSelector(state => state.counter.value)
   const dispatch = useDispatch();

    return(
        <>
        <h1>{counter}</h1>
        <button onClick={()=> dispatch(counterActions.increment())}>Increment</button>
        <button onClick={()=> dispatch(counterActions.decrement())}>Decrement</button>
        <button onClick={()=> dispatch(counterActions.incrementBy(10))}>Increment By </button>
        </>
    )
}

export default Counter;