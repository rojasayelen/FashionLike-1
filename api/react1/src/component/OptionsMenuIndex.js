import React, { useEffect, useState, useRef } from "react";
import {FaRegAddressCard, FaUserCircle, FaHouseUser, FaList} from "react-icons/fa"

export default function OptionsMenu () {
    const dropDown = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropDown.current !== null && !dropDown.current.contains(e.target)) {
              setIsActive(!isActive);
            }
        };
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive]);

    return (
        
        <div className='menu-container'>
            <button onClick={onClick} className="menu-trigger">
                <FaList className="icon"/>
            </button>
            <nav ref={dropDown} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                  <li>
                    <a href="/about" className="">
                      <FaHouseUser className="icon"/>
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="/login" className="">
                      <FaUserCircle className="icon"/>
                      <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="/register" className="">
                      <FaRegAddressCard className="icon"/>
                      <span>New user</span>
                    </a>
                  </li>
                </ul>
            </nav>
        </div>
        
    );
}