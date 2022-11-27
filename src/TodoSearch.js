import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoSearch.css';

function TodoSearch(){
    const { searchValue, setSearchValue} = React.useContext(TodoContext);
    

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);

    }
    return(
        <div style={{textAlign:"center"}}>
        <input 
            className="TodoSearch" 
            placeholder="Search..."
            value = {searchValue}
            onChange={onSearchValueChange}

        />
        </div>
    );
}

export {TodoSearch};