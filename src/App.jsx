import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs } from './components/AboutUs'
import Navbar from "./components/Navbar/Navbar"
import { Home } from "./pages/Home"
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div>
    </ChakraProvider>
  )
}

export default App
