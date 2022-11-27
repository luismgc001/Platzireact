import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,

  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false)

  

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
 
  if (!searchValue.length >= 1){
    searchedTodos = todos;

  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);

    });
    
  }
  

  const completeTodos = (text) => {
    const todoIndex=todos.findIndex(todo => todo.text == text);
    
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // todos[todoIndex]= {
    //   text: todos[todoIndex].text,
    //   completed: true;
    // };
    saveTodos(newTodos);
    //localStorage.setItem("TODOS_V1",JSON.stringify(newTodos))

  }

  const deleteTodos = (text) => {
    const todoIndex=todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1);
        
    // todos[todoIndex]= {
    //   text: todos[todoIndex].text,
    //   completed: true;
    // };
    saveTodos(newTodos);
    //localStorage.setItem("TODOS_V1",JSON.stringify(newTodos))

  }

  // React.useEffect(() => {
  //   console.log("use Effect")
  // }, [totalTodos]);



    return(
        <TodoContext.Provider value={{

            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
          }}>
            {props.children}
        </TodoContext.Provider>

        );

}

export {TodoContext, TodoProvider};