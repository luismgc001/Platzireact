import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos

}
    

){
    return(
        
    <React.Fragment>
    <TodoCounter 
    total = {totalTodos}
    completed = {completedTodos}

    />
    
    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}

    />      

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

    <CreateTodoButton />
  </React.Fragment>

    );
}

export {AppUI};