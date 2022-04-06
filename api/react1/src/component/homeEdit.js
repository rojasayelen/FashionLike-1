import React, { useRef, useState } from "react";

function HomeEditTitle (props) {
        
    const inputRef = useRef();

    const { text, onSetText, editingActive, isInputActive, setIsInputActive } = props;
    
    const [inputValue, setInputValue] = useState(text)
    
    const handleImputChange = (e) => {
        setInputValue(e.target.value);
        onSetText(e.target.value);
    }
    
    const startEditing = () => {
        editingActive 
        ? setIsInputActive(true)
        : setIsInputActive(false)
    }

    return (
        <span>
            <span
                onClick={startEditing} 
                className={`home-text_copy--${editingActive ? "active" : "normal"} home-text_copy--${!isInputActive ? "active" : "hidden"}`}
            >
                {text}
            </span>
            <input
                ref={inputRef}
                className={`home-text_input home-text_input--${isInputActive ? "active" : "hidden"}`}
                value={inputValue}
                onChange={(e) => handleImputChange(e)}
            />
        </span>
    );
}

export default HomeEditTitle;