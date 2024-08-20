import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";

function LogIn (){

   const Navigate = useNavigate()


    return(

        <>
         <h1>LogIn Page </h1>
         <button onClick={()=> Navigate("/home")}>Go to home page</button>
      <br></br>
    <Link to= "signUp">Dont have an account: Sign up</Link>

      <Outlet />

        

        
      
        </>
    )
}

export default LogIn