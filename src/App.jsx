import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/'
import Watchlist from './Pages/Watchlist/'
import Header from './Components/Header/Header'
import Details from './Pages/Details/'
import Searchlist from './Pages/Searchlist'
// import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
     <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='searchlist' element={<Searchlist />} />
            <Route path='details' element={<Details />} />
            <Route path='watchlist' element={<Watchlist />} />
          </Routes>
        {/* <Footer /> */}
     </BrowserRouter>
    </>
  )
}

export default App
