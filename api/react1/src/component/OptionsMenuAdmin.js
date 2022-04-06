import React, { useEffect, useState, useRef } from "react";
import {FaHouseUser, FaList, FaCameraRetro, FaCamera} from "react-icons/fa"

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
                    <a href="/aboutAdmin" className="">
                      <FaHouseUser className="icon"/>
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="/imagesUser" className="">
                      <FaCameraRetro className="icon"/>
                      <span>Fashion</span>
                    </a>
                  </li>
                  <li>
                    <a href="/imagesAdmin" className="">
                      <FaCamera className="icon"/>
                      <span>Edit</span>
                    </a>
                  </li>
                </ul>
            </nav>
        </div>
        
    );
}