import './App.css'
import {Header} from './components/index.js'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, logout } from '../src/features/authSlice.js'
import authService from './appwrite/auth'

// import Footer from './Components/Footer/Footer'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) dispatch(login({ userData }));
                else dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

  return !loading ? (
    <>
     <Header />
      <main>
        <Outlet />
      </main>
    </>
  ) : null
}

export default App
