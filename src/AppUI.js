import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoContext } from "./TodoContext";
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { getValue } from "@testing-library/user-event/dist/utils";

function AppUI(){

  const {
    error, 
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    }= React.useContext(TodoContext)

    return(
        
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />      

    <div>
        <TodoList>
          
          {error && <p>Desesperate, hubo un error.......</p>}
          {loading && <p>Estamos cargando, no desesperes.....</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
          
          

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
      </div>
      

    <CreateTodoButton />
  </React.Fragment>

    );
}

export {AppUI};