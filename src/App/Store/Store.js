import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from '../../Features/authSlice'
import {persistReducer,persistStore} from "redux-persist"
// import storage from 'redux-persist/lib/storage'

const storage = {
 getItem: (key) => Promise.resolve(localStorage.getItem(key)),
 setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
 removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
}

const persistConfig={
    key:"root",
    version:1,
    storage,
}
const rootreducer=combineReducers({
    auth:authReducer
})




const persistedreducer=persistReducer(persistConfig,rootreducer)

export const store=configureStore({
    reducer:persistedreducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
        }),

})


export const persistor = persistStore(store)