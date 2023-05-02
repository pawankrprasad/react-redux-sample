import { useDispatch, useSelector } from "react-redux"
import { authActions } from "./store";

const Login = () =>{
   const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
    return(
        <>
            <h1>{user}</h1>
            <button onClick={()=>dispatch(authActions.logIn("Pawan"))} >Login</button>
            <button onClick={()=> dispatch(authActions.logOut())} >LogOut</button>
        </>
    )
}

export default Login;