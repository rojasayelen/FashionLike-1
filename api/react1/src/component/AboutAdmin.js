import React, {Fragment, useState, useEffect, useRef} from "react";
import Background from "./Background";
import {FaPencilAlt} from "react-icons/fa"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import RegisterForm from './register';
import LoginForm from './Login'
import { AboutEditText, AboutEditTitle} from './aboutEdit';
import { LoginRegister } from "./LoginRegister";

const aboutTitle = "Fashion Like"

const aboutText = 'La primera plataforma donde podrás votar y marcar la tendencia de la moda. Si aún no lo te registraste hazlo haciendo click en New User. Si ya tienes una cuenta ingresa por Login y comienza a participar'

export default function About () { 
    
    const title = aboutTitle
    const text = aboutText

    const aboutRef = useRef(null);

    const [storedTitle, setNewTitle] = useState(title);

    const [storedText, setNewText] = useState(text);

    const [editing, setEditing] = useState(false);

    const [isInputActive, setIsInputActive] = useState(false);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (aboutRef.current !== null && !aboutRef.current.contains(e.target)) {
                setIsInputActive(!isInputActive);
            }
        };
        if (isInputActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isInputActive]);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (aboutRef.current !== null && !aboutRef.current.contains(e.target)) {
                setEditing(!editing);
            }
        };
        if (editing) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [editing]);


    const onClick = () => setEditing(true);

    const editDone = () => {
        setEditing(false);
        setIsInputActive(false);
    }

    return (
        <Fragment>
            <Background/>
            <div>
                <div className="about-container">
                    <div className="about edit">
                        <button className='btn edit' onClick={onClick}><FaPencilAlt/></button>
                    </div>
                    <div ref={aboutRef} className="about">
                        <h3 className="about-title"><strong>
                            <AboutEditTitle 
                                setIsInputActive={setIsInputActive}
                                isInputActive={isInputActive} 
                                editingActive={editing} 
                                text={storedTitle} 
                                onSetText={text => setNewTitle(text)}
                            />
                        </strong></h3>
                        <p id="about">
                            <AboutEditText 
                                setIsInputActive={setIsInputActive}
                                isInputActive={isInputActive}  
                                editingActive={editing} 
                                text={storedText} 
                                onSetText={text => setNewText(text)}
                            />
                        </p>
                    </div>
                <LoginRegister editing={editing} editDone={editDone}/>
                <button className={`btn-header--${editing ? "active" : "hidden"}`} onClick={editDone}>Continuar</button>
                </div>
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                </Routes>
            </div>
        </Fragment>            
    )
};