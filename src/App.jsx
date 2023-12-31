import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Message from './components/Message';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';
import LoginForm from './components/loginform';
import ProjectForm from './components/ProjectForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' exact element={<Message/>} />        
        <Route path='/products' element={<Message/>} /> 
        <Route path='/login' element={<LoginForm/>} /> 
        <Route path='/register' element={<RegisterForm/>} /> 
        <Route path='/profile' element={<Profile/>} /> 
        <Route path='/project/create' element={<ProjectForm/>} /> 
        <Route path='/project/details/:id' element={<Message/>} /> 

      </Routes>
    </Router>
    </>
  )
}

export default App
