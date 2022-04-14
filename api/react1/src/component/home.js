import React, {Fragment} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { LoginRegister } from "./LoginRegister";
import Background from "./Background";

import RegisterForm from './register';
import LoginForm from './Login'


export default function Index () { 
    return (
        <Fragment>
            <Background/>
            <div className="intro-container">
                <div>
                    <div className="intro">
                        <h1>Bienvenido a <br/><strong>FASHION IKE</strong></h1>
                    </div>
                <LoginRegister/>
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                </Routes>
            </div>
        </div>
    </Fragment>            
    )
};