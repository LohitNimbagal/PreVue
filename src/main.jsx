import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "../src/Store/store.js"
import { Provider } from 'react-redux'
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Protected from "./Components/Protected.jsx"
import {Home,Searchlist,Watchlist,Details,Login,Signup} from "./pages/index.js"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path: "/search",
        element: <Searchlist />,
        children: [
          {
            path: ":title",
            element: <Searchlist />
          }
        ]
      },
      {
        path: "/details",
        element: (
            <Details />
        )
      },
      {
        path: "/watchlist",
        element: (
          <Protected authentication>
            <Watchlist />
          </Protected>
        )
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
