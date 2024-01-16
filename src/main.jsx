import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import store from "../src/Store/store.js"
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Protected from "./components/Protected.jsx"
import Home from "./pages/Home.jsx"
import Details from "./pages/Details.jsx"
import Login from "./pages/Login.jsx"
import Searchlist from "./pages/Searchlist.jsx"
import Signup from "./pages/Signup.jsx"
import Watchlist from "./pages/Watchlist.jsx"


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
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // {/* </React.StrictMode>, */}
)
