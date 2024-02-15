import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import AdminHome from './AdminHome';
import { useState } from 'react';
import NewCard from './NewCard';
import SoloCard from './SoloCard';

function App() {
  const [bejelenkezve, setBejelenkezve] = useState(false);

  return (
    <Router>
        <Navbar bejelenkezve={bejelenkezve}/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/Login" element={<Login  bejelenkezve={setBejelenkezve}/>} exact />
          <Route path="/AdminHome" element={<AdminHome/>} exact />
          <Route path="/NewCard" element={<NewCard/>} exact />
          <Route path="/SoloCard/:id" element={<SoloCard />} exact />
        </Routes>
    </Router>
  );
}

export default App;
