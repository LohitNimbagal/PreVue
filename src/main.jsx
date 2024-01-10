import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "../src/Store/store.js"
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Protected from "./Components/Protected.jsx"
import {Home,Searchlist,Watchlist,Details,Login,Signup} from "./Pages/index.jsx"

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
        element: (
          <Protected authentication={false}>
            <Searchlist />
          </Protected>
        )
      },
      {
        path: "/details",
        element: (
          <Protected authentication={false}>
            <Details />
          </Protected>
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
