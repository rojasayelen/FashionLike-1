import React from "react";
import {
    Link
  } from "react-router-dom";
import {FaUserCircle, FaRegAddressCard} from "react-icons/fa"

export const LoginRegister = (props) => {
    
    const { editing }= props;

    return (
        <div className="footer">  
            <ul className="u-list">
                <li className="li-login">
                    <Link to="/Login" className={`btn-header--${!editing ? "active" : "hidden"}`}>
                    <FaUserCircle className="icon"/>
                    <span>Login</span>
                    </Link>
                </li>      
                <li className="li-home">
                    <Link to="/register" className={`btn-header--${!editing ? "active" : "hidden"}`}>
                    <FaRegAddressCard className="icon"/>
                    <span>New User</span>
                    </Link>
                </li>
            </ul>  
        </div>
    )
}