import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


import '../App.css';

import {FaHouseUser} from "react-icons/fa"
import Background from "./Background";
import RegisterForm from './register';
import LoginForm from './Login'
import Index from './home'
import OptionsMenu from './OptionsMenuIndex'
import About from './About'

export default function App () {
  
  return (
    <Router>
    <Background/>  
      <div className='App'>
          <header>
            <nav>
              <div className='float-left'>
                <span>
                    <Link to="/home" className="btn btn-header float-left">
                      <FaHouseUser className="icon"/>
                    </Link>
                </span>  
              </div>
              <div  className='title'>
                <span>FASHION LIKE</span>
              </div>
              <div className='float-right'>
                <span className='btn btn-header'>
                    <OptionsMenu className="icon"/>
                </span>
              </div>
            </nav>

            
          </header>
          <Routes>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/about/*" element={<About/>}/>
            <Route path="/home" element={<Index/>}/>
          </Routes>
      </div>
    </Router> 
  );
}