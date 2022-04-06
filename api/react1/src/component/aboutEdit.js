import React, { useRef, useState } from "react";

function AboutEditTitle (props) {
        
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
                className={`inline-text_copy--${editingActive ? "active" : "normal"} inline-text_copy--${!isInputActive ? "active" : "hidden"}`}
            >
                {text}
            </span>
            <input
                ref={inputRef}
                className={`inline-text_input inline-text_input--${isInputActive ? "active" : "hidden"}`}
                value={inputValue}
                onChange={(e) => handleImputChange(e)}
            />
        </span>
    );
}

function AboutEditText (props) {
    
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
        <span >
            <span
                onClick={startEditing} 
                className={`inline-text_copy--${editingActive ? "active" : "normal"} inline-text_copy--${!isInputActive ? "active" : "hidden"}`}
            >
                {text}
            </span>
            <textarea
                ref={inputRef}
                className={`inline-text_input inline-text_input--${isInputActive ? "active text" : "hidden"}`}
                value={inputValue}
                onChange={(e) => handleImputChange(e)}
            ></textarea>
        </span>
    );
}

export {
    AboutEditTitle,
    AboutEditText
};