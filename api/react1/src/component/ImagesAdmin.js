import React, {Fragment, useState, useEffect} from "react";
import { FaPencilAlt, FaTrashAlt, FaAngleDoubleRight, FaCheck } from "react-icons/fa"
import  {images}  from "../static"
import { ImageUpload } from "./imagesUpload";
import useKeypress from "react-use-keypress";
import EditTitle from "./ImageEditTitle";
import EditDescription from "./ImageEditDescription";
import Index from "./home";

const AdminImages = () => {
    
    const [arr, setArr] = useState(images); 

    const [ activeIndex, setActiveIndex ] = useState(null)

    const [ isInputActive, setIsInputActive ] = useState(false);

    const [ storedTitle, setNewTitle ] = useState();

    const [ storedDescription, setNewDescription ] = useState();

    const [ inputTitle, setInputTitle ] = useState("");

    const [ inputDescription, setInputDescription ] = useState("");

    const onClickImage = (i) => {
        let newA = [...arr];
        let s = newA[i];
        newA = s;
        const { title, description } = newA;
        setInputTitle(title);
        setInputDescription(description);
        setNewTitle(title);
        setNewDescription(description);
        setIsInputActive(true);
        setActiveIndex(i)
    }

    useKeypress('Escape', () => {
        setIsInputActive(false);
    })

    const handleCancelEditing = (index) => {
        let newA = [...arr];
        let s = newA[index];
        newA = s;
        const { title, description } = newA;
        setInputTitle(title);
        setInputDescription(description);
        setNewTitle(title);
        setNewDescription(description);
        setIsInputActive(false);
    }

    const handleInput = (id, index) => {
        let newA = [...arr];
        let s = newA[index];
        newA = s;
        const newObj = {...s, title: storedTitle, description: storedDescription};
        const newArray = arr.map((obj) => 
                obj.id === id
                ? newObj
                : obj
        );
        setArr(newArray);
        setIsInputActive(false)
    }

    const deleteImage = (id) => {
        const imgId = id;
        const newArr = arr.filter(item => item.id !== imgId);
        setArr(newArr);
    }
        
    return (
        <Fragment>
        <ImageUpload />
        <div>
            <ul>
            <div className="u-imagen">
                {arr.map((img, index) => {
                    return (
                    <li key={index} className="img-container">
                        <div className="image-title">
                            <span><FaAngleDoubleRight className="angleRight"/>
                                <EditTitle 
                                    i={index}
                                    inputTitle={inputTitle}
                                    setInputTitle={setInputTitle}
                                    setNewTitle={setNewTitle}
                                    isInputActive={isInputActive} 
                                    text={img.title}
                                    activeIndex={activeIndex}
                                />
                            </span>
                        </div>
                        <div>
                            <img src={img.src} alt={img.title} className="images"/>
                        </div>
                        <div>
                            <p className="description">
                                <EditDescription 
                                    i={index}
                                    inputDescription={inputDescription}
                                    setInputDescription={setInputDescription}
                                    setNewDescription={setNewDescription}
                                    isInputActive={isInputActive} 
                                    text={img.description} 
                                    activeIndex={activeIndex}
                                />
                            </p>
                        </div>
                        <div className={`img-btn-edit--${isInputActive && activeIndex === index ? "hidden" : "active"}`}>
                            <button 
                                id={img.id} 
                                type="button"
                                className='btn edit'
                                onClick={() => onClickImage(index)}
                                >
                                <FaPencilAlt/>
                            </button>
                            <button 
                                id={img.id}
                                name={img.title}
                                type="button"
                                className='btn delete' 
                                onClick={() => deleteImage(img.id)}
                                >
                                <FaTrashAlt/>
                            </button>
                        </div>
                        <div className={`img-btn-editing--${isInputActive && activeIndex === index ? "active" : "hidden"}`}>                      
                            <button 
                                type="button" 
                                className="btn edit"
                                onClick={() => handleInput(img.id, index)}    
                            ><FaCheck/></button>
                            <button 
                                type="button" 
                                className="btn cancel" 
                                onClick={() => handleCancelEditing(index)}
                            ><strong>X</strong></button>
                        </div>
                    </li>
                )})}  
            </div>
            </ul>
        </div>
        
        </Fragment>
    )
}

export default AdminImages; 