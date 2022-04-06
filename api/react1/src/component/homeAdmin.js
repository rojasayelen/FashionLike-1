import React, { useState, Fragment, useRef, useEffect} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import {FaPencilAlt} from "react-icons/fa"
import { LoginRegister } from "./LoginRegister";
import Background from "./Background";
import RegisterForm from './register';
import LoginForm from './Login'
import HomeEditTitle from './homeEdit';

function IndexAdmin () {
    let title = "Bienvenide a Fashion Like"

    const homeRef = useRef(null); 

    const [storedTitle, setNewTitle] = useState(title);

    const [editing, setEditing] = useState(false);

    const [isInputActive, setIsInputActive] = useState(false);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (homeRef.current !== null && !homeRef.current.contains(e.target)) {
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

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (homeRef.current !== null && !homeRef.current.contains(e.target)) {
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

    const onClick = () => setEditing(true);

    const editDone = () => {
        setEditing(false);
        setIsInputActive(false);
    }

    return (
        <Fragment>
            <Background/>
            <div>
                <div className="intro-container">
                    <div className="about edit">
                        <button className='btn edit' onClick={onClick}><FaPencilAlt/></button>
                    </div>
                    <div ref={homeRef} className="intro">
                        <h2>
                        <strong>
                            <HomeEditTitle 
                                setIsInputActive={setIsInputActive}
                                isInputActive={isInputActive} 
                                editingActive={editing} 
                                text={storedTitle} 
                                onSetText={text => setNewTitle(text)}
                            />
                        </strong></h2>
                    </div>
                    <LoginRegister editing={editing} editDone={editDone}/>
                    <button className={`btn-header--${editing ? "active" : "hidden"}`} onClick={editDone}>Continuar</button>
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                </Routes>
            </div>
        </div>
    </Fragment>            
    )
};

export default IndexAdmin;