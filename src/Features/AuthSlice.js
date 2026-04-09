import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:false,
        userType:null,
    },
        reducers:{
            login:(state,action)=>{
                state.isAuthenticated=true
                state.userType=action.payload.userType
            },
            logout:(state,action)=>{
                state.isAuthenticated=false
                state.userType=null
            }

        }
    
})

export const{login,logout}=authSlice.actions
 
export default authSlice.reducer


