// import TodoList from "../../components/todolist/TodoList";
import React from "react";
import Projects from "../../components/projects/Projects";
import { TodoListContext } from "../../context/TodoListContext";

const Dashboard = () => {
    const { state } = React.useContext(TodoListContext)
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