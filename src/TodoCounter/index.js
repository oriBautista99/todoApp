import React from 'react';
import './TodoCounter.css'
import {TodoContext} from '../TodoContext';

function TodoCounter(){

    const {totalTodos,completedTodos} = React.useContext(TodoContext);

    return (
        <div className='container'>
           <h2 className='title'>Has completado {completedTodos} de {totalTodos} Todo's</h2> 
        </div>
    );
}

export { TodoCounter };