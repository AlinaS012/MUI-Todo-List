// import React from "react"
// import TodoList from "../../components/todolist/TodoList";
import React, { useContext } from "react";
import Projects from "../../components/projects/Projects";
import { TodoListContext } from "../../context/TodoListContext";

const Dashboard = () => {
    const { state } = useContext(TodoListContext)
    return (

        < Projects projectsList={
            [
                ...state.projectTodos
                // {
                //     title: 'Routines',
                //     todos: ["Added todo", "Added todo"]
                // },
                // {
                //     title: 'Inspirations',
                //     todos: ["Added todo", "Added todo"]
                // }
            ]} />
    )
}

export default Dashboard;