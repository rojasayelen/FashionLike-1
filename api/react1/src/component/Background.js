import React from "react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa"
import {images} from "../static";

function Background () {
    return(
    <div className="images-bg">
        <ul>
            <div className="u-imagen">
                {images.map((img) => {
                return (
                <div key={img.id} className="img-container">
                    <li>
                    <div>
                        <img src={img.src} alt={img.title} className="images"/>
                    </div>
                    <div className="img-btn">
                        <button className='btn'><FaThumbsUp/></button>
                        <button className='btn'><FaThumbsDown/></button>
                    </div>                      
                    </li>
                </div>      
                )})}  
            </div>
        </ul>
    </div>)
}

export default Background;
        
