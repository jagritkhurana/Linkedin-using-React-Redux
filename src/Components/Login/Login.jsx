import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import { Toaster } from "react-hot-toast";
import { login } from '../../Features/authSlice';
import { useDispatch } from 'react-redux';
import {store} from '../../App/Store/Store';

function Login() {

    const navigate = useNavigate()

    const [password, setPassword] = useState("")
    const [email, setemail] = useState("")
    const dispatch=useDispatch()

    function handlesubmit(e) {
        e.preventDefault();
        console.log(email, password);

        // if(email==="admin@gmail.com" && password==='1234'){
        //     alert("Login successful")

        //     localStorage.setItem('loggedIn','true')
        //     localStorage.setItem('userType','Admin')

        //     navigate("/Mynetwork")
        // }else if(email==="user@gmail.com" && password==='1234'){
        //     alert("Login successful")

        //     localStorage.setItem('loggedIn','true')
        //     localStorage.setItem('userType','User')

        //     navigate("/Home")
        // }else{
        //     alert("invalid credentials")
        // }

        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify([
                {
                    email: "user@gmail.com", password: '1234'
                },
                {
                    email: "admin@gmail.com", password: '1234'
                },
            ]))
        }

        const users = JSON.parse(localStorage.getItem("users")) || []

        const user = users.find((e) => (
            e.email == email && e.password == password
        ))
        if (user) {
            // localStorage.setItem("loggedIn", true)
            // localStorage.setItem("userType", user.email === 'admin@gmail.com' ? 'Admin' : 'User')
            dispatch(login({
                email:user.email,
                userType:user.email==='admin@gmail.com'?"Admin":'User'
                
        
            }))
            console.log({store});
            toast.success("Succesfully logged in")
            navigate('/Home')
        } else {
            toast.error("Invalid Credentials")
        }

    }


    return (
        <div className="w-full h-screen bg-white flex  justify-center items-center">
            
            <div className="w-100 h-auto m-5 p-5 shadow-2xl outline-neutral-600 bg-white rounded-lg flex justify-center items-center">
                <form onSubmit={handlesubmit}>
                    <p className="text-3xl font-semibold">Sign in</p>
                    <div className="flex-col flex  mt-2">
                        <label className="">E-mail Address</label>
                        <input type='email' placeholder="Enter E-mail" value={email} onChange={(e) => setemail(e.target.value)} className="border border-black  p-2.5" />
                    </div>
                    <div className="flex-col flex  mt-2">
                        <label className="">Password</label>
                        <input type='password' placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-black p-2.5" />
                    </div>
                    <Link to='/ForgotPass' className='text-blue-600 hover:underline hover:bg-blue-100 rounded-lg  font-semibold '>Forgot Password?</Link>
                    <div>
                        <button className=" p-2 w-full mt-5 mr-2 bg-blue-400 rounded-2xl">Sign in </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login
