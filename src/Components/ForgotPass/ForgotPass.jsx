import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ForgotPass() {
    const [nemail, setnemail] = useState('')
    const [newpass, setnewpass] = useState('')
    const navigate = useNavigate()

    function handlereset(e){
        e.preventDefault()
        if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([
            { email: "user@gmail.com", password: "1234" },
            { email: "admin@gmail.com", password: "1234" }
        ]));
    }
        const users=JSON.parse(localStorage.getItem('users'))||[];

        const userIndex=users.findIndex((u)=>u.email===nemail)

        if(userIndex===-1){
            toast.error('user not found')
            return;
        }

        users[userIndex].password=newpass;

        localStorage.setItem("users",JSON.stringify(users));

        toast.success("Password updated succesfully")

        navigate('/Login')



    }




    return (
        <div className="w-full h-screen bg-white flex  justify-center items-center">
            <div className="w-100 h-auto m-5 p-5 shadow-2xl outline-neutral-600 bg-white rounded-lg flex justify-center items-center">
                <form onSubmit={handlereset} >
                    <p className="text-3xl font-semibold">Reset Password</p>
                    <div className="flex-col flex  mt-2">
                        <label className="">E-mail Address</label>
                        <input type='email' placeholder="Enter E-mail" value={nemail} onChange={(e) => setnemail(e.target.value)} className="border border-black  p-2.5" />
                    </div>
                    <div className="flex-col flex  mt-2">
                        <label className="">New Password</label>
                        <input type='password' placeholder="Enter password" value={newpass} onChange={(e) => setnewpass(e.target.value)} className="border border-black p-2.5" />
                    </div>
                    <div>
                        <button className="m-2 p-2 w-full mt-5 mr-2 bg-blue-400 rounded-2xl">Reset password </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default ForgotPass
