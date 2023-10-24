import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Message from './components/loginform';
import RegisterForm from './components/RegisterForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' exact element={<Message/>} />        
        <Route path='/products' element={<Message/>} /> 
        <Route path='/login' element={<Message/>} /> 
        <Route path='/register' element={<RegisterForm/>} /> 

      </Routes>
    </Router>
    </>
  )
}

export default App
