
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';


const counterSlice = createSlice({
    name:"counter",
    initialState: { value: 0},
    reducers:{
        increment: (state)=>{
            state.value = state.value + 1
        },
        decrement : (state) =>{
            state.value = state.value - 1
        },
        incrementBy: (state, action) =>{
            state.value = state.value + action.payload
        }
    }
})

const authSlice = createSlice({
    name:"auth",
    initialState: {
        loggedIn: false,
        user: ""
    },
    reducers: {
        logIn : (state, action) =>{
            state.loggedIn = true;
            state.user = action.payload
        },
        logOut: (state) =>{
            state.loggedIn = false;
            state.user = ""
        }
    }
})

 const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
 }, composeWithDevTools())

 export const counterActions = counterSlice.actions;
 export const authActions = authSlice.actions

 export default store;