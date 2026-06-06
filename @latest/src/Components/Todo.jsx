import { useSelector } from "react-redux"
import AddForm from "./AddForm";

import {useDispatch} from "react-redux"

import { deleteTodo } from "../Features/Todo/TodoSlice";





export default function Todo(){
    const todos = useSelector((state) => state.Todo.Todos);

    const Dispatch = useDispatch();
    
    const deleteHandler = (id)=>{
        Dispatch(deleteTodo(id))
    
    }


    
    console.log(todos)
    return(
        <div>
            <h3>
                Todo List App             
            </h3>
            <AddForm/>
            <ul>
                    {todos.map((todo)=>(<li key={todo.id}>{todo.task} <button onClick={()=> deleteHandler(todo.id)}>Delete</button> </li>))}
                </ul>
        </div>
    )
}