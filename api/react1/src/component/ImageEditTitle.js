import React, { useRef, useState } from "react";

function EditTitle (props) {
        
    const inputRef = useRef();

    const { i, text, editing, isInputActive, setIsInputActive, activeIndex } = props;
    
    const [inputValue, setInputValue] = useState(text)

    const [ storedTitle, setNewTitle ] = useState(text);

    const handleImputChange = (e) => {
        setInputValue(e.target.value);
        setNewTitle(e.target.value);
    }
    
    const startEditing = (index) => {
        let edit = [editing];
        let start = edit[index];
        start = true;
        edit[index] = start
        setIsInputActive(edit);
    }


    return (
        <span>
            <span
                ref={inputRef}
                onClick={() => startEditing(i)} 
                className={`image-text_copy--${editing && activeIndex === i ? "active" : "normal"} image-text_copy--${isInputActive && activeIndex === i ? "hidden" : "active"}`}
            >
                {storedTitle}
            </span>
            <input
                className={`image-title_input image-title_input--${isInputActive && activeIndex === i ? "active" : "hidden"}`}
                value={inputValue}
                onChange={(e) => handleImputChange(e)}
            />
        </span>
    );
}

export default EditTitle;