import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <BrowserRouter>
      <nav>        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        </nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> 
      <div className="App">
      <EmployeeList />
    </div>
    </BrowserRouter>
    
  );
}


export default App;
