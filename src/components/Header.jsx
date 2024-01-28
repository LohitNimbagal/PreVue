import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SearchInput } from './UI'
import { logout } from '../store/authSlice'
import { useEffect, useState } from 'react'
import authService from '../appwrite/auth'
import logo from "../assets/logo.png"
import More from './UI/More'


function Header() {

  const dispatch = useDispatch()
  const nagivate = useNavigate()
  const location = useLocation()
  const authStatus = useSelector((state)=> state.auth.status)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  },[location.pathname])

  const handelAddSearchterm = (searchTerm)=>{
    console.log(searchTerm);
    dispatch(add(searchTerm))
  }

  const handleLogout = () => {
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }

  const navItems = [
    {
      name: "Home",
      path: "/home?type=movie&category=popular",
      active: true
    },
    // {
    //   name: "Favorite",
    //   path: "/",
    //   active: authStatus
    // },
    {
      name: "Watchlist",
      path: "/watchlist",
      active: true
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
      actionBtn: true
    },
    {
      name: "Signup",
      path: "/signup",
      active: !authStatus,
      actionBtn: true
    },
  ]

  return (
    <>

    <header className='w-full h-auto flex flex-wrap lg:flex-row items-center justify-center lg-w-full lg:items-center lg:justify-between lg:px-10'>

      <div className='w-full px-5 flex flex-wrap justify-between items-center lg:w-auto '>
        <Link to='/home?type=movie&category=popular'><img src={logo} alt="logo" className='w-52'/></Link>
        
        <button 
        onClick={ () => setIsOpen(!isOpen)}>
          {isOpen ? "X " : <More />}
        </button>

        {
          isOpen && (
            <ul className='w-full gap-3 flex flex-col text-sm items-center justify-center lg:flex'>
          {navItems.map((item) => {
            if (item.active && item.actionBtn){
              return(
                <li key={item.name}>
                  <button key={item.name} onClick={()=> nagivate(item.path)} className='inline-bock duration-200 bg-blue-600 text-md p-2 px-3 rounded-sm text-slate-900 tracking-wider hover:bg-blue-400 '>
                    {item.name}
                  </button>
              </li>
              )
            }else if (item.active) {
              return (
                <li key={item.name}>
                  <button key={item.name} onClick={()=> nagivate(item.path)} className='p-1 text-slate-900 tracking-wider text-base'>
                    <h1>{item.name}</h1>
                  </button>
                </li>
                )
              }
              
            }
            )}

           {authStatus && (
             <button className='inline-bock duration-500 bg-blue-500 p-1 px-2 rounded-sm tracking-wider text-base text-slate-900 hover:bg-blue-400' onClick={handleLogout}>
              Logout
            </button>
           )}
      </ul>
          )
        }
      </div>

      <SearchInput />

      <ul className='gap-3 text-sm items-center hidden lg:flex'>
          {navItems.map((item) => {
            if (item.active && item.actionBtn){
              return(
                <li key={item.name}>
                  <button key={item.name} onClick={()=> nagivate(item.path)} className='inline-bock duration-200 bg-blue-600 text-md p-2 px-3 rounded-sm text-slate-900 tracking-wider hover:bg-blue-400 '>
                    {item.name}
                  </button>
              </li>
              )
            }else if (item.active) {
              return (
                <li key={item.name}>
                  <button key={item.name} onClick={()=> nagivate(item.path)} className='p-1 text-slate-900 tracking-wider text-base'>
                    <h1>{item.name}</h1>
                  </button>
                </li>
                )
              }
              
            }
            )}

           {authStatus && (
             <button className='inline-bock duration-500 bg-blue-600 p-1 px-2 rounded-sm tracking-wider text-base  text-slate-900 hover:bg-blue-400' onClick={handleLogout}>
              Logout
            </button>
           )}
      </ul>
    </header>
    </>
  )

  
}

export default Header