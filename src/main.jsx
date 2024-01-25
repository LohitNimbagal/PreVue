import React from 'react'
import App from './App.jsx'
import './index.css'
import store from "../src/store/store.js"
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Protected } from './components/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Home, Details, Login, Signup, Watchlist, Result} from "./pages/index.js"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/:navinfo",
            element: <Home />
          }
        ]
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
        path: "results",
        element: <Result />,
        children: [
          {
            path: ":searcherm",
            element: <Result />
          }
        ]
      },
      {
        path: "/details",
        element: <Details />,
        children: [
          {
            path: "/details/:details",
            element: <Details />
          }
        ]
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

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
 </React.StrictMode>,
)
