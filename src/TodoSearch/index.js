import React from "react";
import './TodoSearch.css'
import {TodoContext} from '../TodoContext';

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return(
        <div className="content">
            <input 
                className="TodoSearch" 
                placeholder="Buscar To do"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <button className="delete">X</button>            
        </div>
    );
}

export {TodoSearch};