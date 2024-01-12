import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './Store/authSlice'

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
