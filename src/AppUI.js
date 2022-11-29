import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoContext } from "./TodoContext";
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { getValue } from "@testing-library/user-event/dist/utils";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm/index.js";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";
import { TodosLoading } from "./TodosLoading";


function AppUI(){

  const {
    error, 
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    }= React.useContext(TodoContext)
 
    return(
        
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />      

    <div>
        <TodoList>
          
          {error && <TodosError error={error} />}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos.length) && <EmptyTodos/>}
          
          

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete= {() => completeTodos(todo.text)}
            onDelete= {() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      </div>
      

    <CreateTodoButton 
    setOpenModal={setOpenModal}

    />
  </React.Fragment>

    );
}

export {AppUI};