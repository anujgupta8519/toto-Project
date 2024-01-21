import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo Message",
            completed:false,

        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}

})

export const useTodo = function () {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider