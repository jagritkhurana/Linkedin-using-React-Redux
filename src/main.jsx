import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Jobs from './Components/Jobs/Jobs.jsx'
import Login from './Components/Login/Login.jsx'
import Me from './Components/Me/Me.jsx'
import Messaging from './Components/Messaging/Messaging.jsx'
import Mynetwork from './Components/Mynetwork/Mynetwork.jsx'
import Layout1 from './Layout1.jsx'
import Protected from './Components/Protected.jsx'
import ForgotPass from './Components/ForgotPass/ForgotPass.jsx'
import toast from "react-hot-toast"
import { Toaster } from "react-hot-toast";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { persistor,store } from './App/Store/Store.js'

// const isLoggedIn = window.localStorage.getItem("loggedIn")
// const userType = window.localStorage.getItem("userType")



const router = createBrowserRouter([

  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/ForgotPass',
    element: <ForgotPass />
  },

  {
    path: '/',
    element: (
      <Protected>
        <Layout1 />
      </Protected>

    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'Home',
        element: <Home />
      },
      {
        path: 'Mynetwork',
        element: <Mynetwork />
      },
      {
        path: 'Jobs',
        element: <Jobs />
      },
      {
        path: 'Messaging',
        element: <Messaging />
      },
      {
        path: 'Me',
        element: <Me />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
