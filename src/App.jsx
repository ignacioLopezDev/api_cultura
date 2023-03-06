import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs } from './components/AboutUs'
import Navbar from "./components/Navbar/Navbar"
import { Home } from "./pages/Home"
import { Grid } from "./pages/Museos/Grid"

function App() {

  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='museos' element={<Grid />} />
        </Routes>
      </div>
    </ChakraProvider>
  )
}

export default App
