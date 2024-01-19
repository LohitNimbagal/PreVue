import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SearchInput } from '../index'
import { logout } from '../../pages/LogIn/authSlice'
import authService from '../../appwrite/auth'
import logo from "../../assets/logo.png"


function Header() {

  const dispatch = useDispatch()
  const nagivate = useNavigate()
  const authStatus = useSelector((state)=> state.auth.status)

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
    // {
    //   name: "Home",
    //   path: "/",
    //   active: true
    // },
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

    <header className='w-full flex flex-col lg:flex-row items-center justify-center lg-w-full lg:items-center lg:justify-between lg:px-10'>

      <Link to='/'><img src={logo} alt="logo" className='w-52'/></Link>
        
      <SearchInput />

      <img src="../../public/statics/more.png" alt="menu" className='w-5 m-2 hidden lg:hidden'/>

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
             <button className='inline-bock duration-500 bg-blue-600 p-1 px-2 rounded-sm tracking-wider text-base text-slate-900 hover:bg-blue-400' onClick={handleLogout}>
              Logout
            </button>
           )}
      </ul>
    </header>
    </>
  )

  
}

export default Header