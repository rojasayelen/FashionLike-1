import React, {Fragment} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import {FaRegAddressCard, FaUserCircle } from "react-icons/fa"
import Background from "./Background";

import RegisterForm from './register';
import LoginForm from './Login'

const aboutTitle = "Fashion Like"

const aboutText = 'La primera plataforma donde podrás votar y marcar la tendencia de la moda. Si aún no lo te registraste hazlo haciendo click en New User. Si ya tienes una cuenta ingresa por Login y comienza a participar'

export default function About () { 

    const title = aboutTitle
    const text = aboutText
    
    return (
        <Fragment>
            <Background/>
            <div>
                <div className="about-container">
                    <div className="about">
                        <h3 className="about-title"><strong>{title}</strong></h3>
                        <p id="about">{text}</p>
                    </div>
                    <div className="about-btn">   
                        <ul className="u-list">
                            <li className="li-home">
                                <Link to="/Login" className="btn btn-header">
                                <FaUserCircle className="icon"/>
                                <span>Login</span>
                                </Link>
                            </li>      
                            <li className="li-home">
                                <Link to="/register" className="btn btn-header">
                                <FaRegAddressCard className="icon"/>
                                <span>New User</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                </Routes>
                </div>
            </div>
        </Fragment>            
    )
};