
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Help from './pages/Help'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/services' element={<Services/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/help' element={<Help/>} />
       <Route path='/about' element={<About/>} />
     </Routes>
       
    </>
  )
}

export default App
