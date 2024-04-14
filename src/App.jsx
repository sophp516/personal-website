import { useState } from 'react'
import {
  Link, BrowserRouter as Router, Route, Routes, Navigate
} from 'react-router-dom';
import './App.css'
import Mainpage from './Mainpage';
import Portfolio from './Portfolio';
import Weather from './Weather';

const App = () => {



  return (
    <Router>
      <div className="navbar">
        <p className="navName">Sophie Park</p>
        <div className="navButtons">
          <Link to="/mainpage"><button>HOME</button></Link>
          <Link to="/portfolio"><button>PORTFOLIO</button></Link>
        </div>
      </div>
      <Routes>
        <Route path="/mainpage" element={<Mainpage />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
        <Route path="*" element={<Navigate to="/mainpage" />}></Route>
      </Routes>
    </Router>
  )
}

export default App
