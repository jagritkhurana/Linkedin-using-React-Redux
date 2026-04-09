import React from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Features/authSlice';

function Header() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    return (
        <div className='bg-stone-200'>
            <nav className="w-full h-14 flex justify-between px-5 bg-white">
                <div className="flex items-center gap-2 ml-40 ">
                    <img className=" h-7 w-7"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/250px-LinkedIn_icon.svg.png?_=20210220164014"
                        alt="LinkedIn_icon" />
                    <div className="relative">
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                            className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
                        <input type="text" placeholder="Search"
                            className="bg-white rounded-4xl p-2 w-60 pl-8 text-sm  border border-gray-400" />
                    </div>
                </div>

                <ul className="flex items-center mr-50 gap-4">
                    <li >
                        <NavLink to="/Home" className="m-[20px] flex flex-col items-center text-xs cursor-pointer hover:font-extrabold">
                            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="" className="h-6 w-6" />
                            <span>Home</span>
                        </NavLink>

                    </li>
                    <li >
                        <NavLink to="/Mynetwork" className="m-[20px] flex flex-col items-center text-xs cursor-pointer hover:font-extrabold">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="" className="h-6 w-6" />
                            <span>My Network</span>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/Jobs" className="m-[20px] flex flex-col items-center text-xs cursor-pointer hover:font-extrabold">
                            <img src="https://cdn-icons-png.flaticon.com/128/522/522510.png"
                                className="w-6 h-6 opacity-70 hover:opacity-100" />
                            <span>Jobs</span>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/Messaging" className="m-[20px] flex flex-col items-center text-xs cursor-pointer hover:font-extrabold">
                            <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" className="w-6 h-6" />
                            <span>Messaging</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Login' className="m-[20px] flex flex-col items-center text-xs cursor-pointer hover:font-extrabold">
                            <img src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png" className="w-6 h-6" />
                            <span>Login</span>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to='/Me' className="m-[20px] flex flex-col items-center text-xs cursor-pointer hover:font-extrabold">
                            <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" className="w-6 h-6" />
                            <span>Me</span>
                        </NavLink>
                    </li>
                    <li>
                        <button className='text-xl  text-blue-600 shadow pb-1 pr-3 pl-3 rounded-full hover:bg-stone-200 border outline-none pr-1 pl-1 '
                        onClick={()=>{
                            dispatch(logout())
                            localStorage.clear()
                            navigate('/Login')
                        }}
                        >Log out</button>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Header
