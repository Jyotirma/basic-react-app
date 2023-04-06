import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Content from './Pages/Content'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import { Box } from '@mui/material'

function App() {

  return (
    <div className="App">
        
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/content' element={<Content/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default App
