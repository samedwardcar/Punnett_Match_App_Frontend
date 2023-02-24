import React from 'react';
import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Nav from './components/Nav';

// import About from './components/About';

// import User from './components/User';

import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Punnett from './components/Punnett';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Punnett">Punnett</Link></li>
          <li><Link to="/Login">Login</Link> </li>
          <li><Link to="/Signup">Signup</Link> </li>
        </ul>
      </nav>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Punnett" element={<Punnett />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
   </Routes>
   </>
  );
}

export default App;
