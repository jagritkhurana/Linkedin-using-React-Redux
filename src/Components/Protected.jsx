import React from 'react'
import Login from './Login/Login';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Protected({children}) {
    // const isLoggedIn=localStorage.getItem("loggedIn");


    // return isLoggedIn==='true'? children : <Navigate to='/Login'/>

    const isAuth=useSelector((state)=>state.auth.isAuthenticated);

    return isAuth?children:<Navigate to='/Login'/>
 
}

export default Protected
