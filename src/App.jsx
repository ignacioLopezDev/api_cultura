import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs } from './components/AboutUs'
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
