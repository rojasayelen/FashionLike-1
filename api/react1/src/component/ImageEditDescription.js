import React, { useRef, useState } from "react";
import useKeypress from "react-use-keypress";

function EditDescription (props) {
        
    const inputRef = useRef();

    const { i, text, editing, isInputActive, setIsInputActive, setEditing, activeIndex } = props;
    
    const [inputValue, setInputValue] = useState(text)

    const [ storedDescription, setNewDescription ] = useState(text);

    const handleImputChange = (e) => {
        setInputValue(e.target.value);
        setNewDescription(e.target.value);
    }
    
    const startEditing = (index) => {
        let edit = [editing];
        let start = edit[index];
        start = true;
        edit[index] = start
        setIsInputActive(edit);
    }

    useKeypress('Enter', () => {
        setEditing(false);
        setIsInputActive(false);
    });

    return (
        <span>
            <span
                onClick={() => startEditing(i)} 
                className={`image-text_copy--${editing && activeIndex === i ? "active" : "normal"} image-text_copy--${isInputActive && activeIndex === i ? "hidden" : "active"}`}
            >
                {storedDescription}
            </span>
            <textarea
                ref={inputRef}
                className={`image-text_input image-text_input--${isInputActive && activeIndex === i ? "active" : "hidden"}`}
                value={inputValue}
                onChange={(e) => handleImputChange(e)}
            ></textarea>
        </span>
    );
}

export default EditDescription;