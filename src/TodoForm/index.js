import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm (){
    const [newTodoValue, setNewTodoValue] = React.useState();

    const {
        addTodos,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
        //TODO

    }
    
    
    const onCancel = () =>{
        setOpenModal(false)

    }

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);

    }

    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={newTodoValue} 
                onChange={onChange}
                placeholder="Indroduce la tarea a guardar"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    
                >
                    Anadir
                </button>
            </div>

        </form>
    );
}

export {TodoForm};