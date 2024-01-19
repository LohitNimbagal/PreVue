import React from 'react'
import App from './App.jsx'
import './index.css'
import store from "../src/store/store.js"
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux'
import { Protected } from './components/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home, Searchlist, Details, Login, Signup, Watchlist} from "./pages/index.js"



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

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
 </React.StrictMode>,
)
