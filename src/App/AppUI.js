import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoButton } from '../TodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { ToDoForm } from "../TodoForm";
import './App.css'

function AppUI(){

  const {
    error,
    loading,
    searchedTodos,
    completeTodos, 
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter/>
  
        <TodoSearch/>
        
          <TodoList>

            {loading && <div className="content-loading"><div className="lds-dual-ring"></div></div>}

            {error && <p>Desesperate, hubo un error</p>}

            {(!loading && !searchedTodos.length) && <p>Crea a tu propio todo</p>}

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
              />
            ))}
              
          </TodoList>     

          {openModal && (
            <Modal>
              <ToDoForm/>
            </Modal>            
          )}  

  
        <TodoButton
          setOpenModal={setOpenModal}
        />
      </React.Fragment>
    );
}

export {AppUI};