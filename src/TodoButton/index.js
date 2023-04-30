import React from "react";
import './TodoButton.css'

function TodoButton(props) {
    const onClickButton = (msg) => {
      props.setOpenModal(prevModal => !prevModal)
    }
    return(
      <button 
        className="button"
        onClick={onClickButton}
      >
        +
      </button>      
    );
}

export {TodoButton};