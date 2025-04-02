import React, { useReducer, ReactNode } from "react"
// interface Todo {
//     title: string;
//     // desc?: string;
//     //time?: string;
// }

// interface Project {
//     title: string;
//     todos: Todo[];
// }
import { Project, Todo } from '../types/contextTypes'

export interface State {
    projectTodos: Project[];
}

interface AddProjectAction {
    type: "addProject";
    project: string;
}

interface AddTodoProjectAction {
    type: "addTodoProject";
    project: string;
    todo: Todo;
}

type Action = AddProjectAction | AddTodoProjectAction
const INITIAL_STATE: State = {
    projectTodos: [
        {
            title: 'routines',
            todos: []
        },
        {
            title: 'inspirations',
            todos: []
        }
    ]
    // {
    //     projectName: '',
    //     todos: [{
    //         title: '',
    //         desc: ''
    //     }]

    // }
}

export const TodoListContext = React.createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>(//INITIAL_STATE
    {
        state: INITIAL_STATE,
        dispatch: () => undefined,
    })

// const todoReducer = (state: State, action: Action): State => {
//     switch (action.type) {
//         case 'addProject':
//             return {
//                 ...state,
//                 projectTodos: state.projectTodos.push({
//                     title: action.project,
//                     todos: []
//                 })
//             }
//         case 'addTodoProject':
//             const projectToAddto = action.project
//             console.log(state, "state")
//             const index = state['projectTodos'].findIndex((proj) => proj['title'] === projectToAddto)
//             console.log(index, "index")
//             if (index === -1) {
//                 console.log('no such project found')
//                 return { ...state }
//             }
//             const instance = state
//             instance.projectTodos[index].todos.push(action.todo)
//             return {
//                 ...state,
//                 projectTodos: instance.projectTodos,
//                 // {
//                 //     project: projectToAddto,
//                 //     todos: instance
//                 // }
//             }
//         default:
//             return state;
//     }
// }

// export const TodoListContextProvider = ({ children }) => {
//     const [state, dispatch] = React.useReducer(todoReducer, INITIAL_STATE)
//     // const [todos, setTodos] = useState([])
//     return (
//         <TodoListContext.Provider
//             value={{ state, dispatch }}
//         // values={{ todos, setTodos }}
//         >
//             {children}
//         </TodoListContext.Provider>
//     )
// }

const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "addProject":
            return {
                ...state,
                projectTodos: [
                    ...state.projectTodos,
                    { title: action.project, todos: [] },
                ],
            };
        case "addTodoProject": {
            const projectIndex = state.projectTodos.findIndex(
                (proj) => proj.title === action.project
            );
            if (projectIndex === -1) {
                console.log("no such project found");
                return state;
            }
            const updatedProjects = [...state.projectTodos];
            updatedProjects[projectIndex] = {
                ...updatedProjects[projectIndex],
                todos: [...updatedProjects[projectIndex].todos, action.todo],
            };
            return {
                ...state,
                projectTodos: updatedProjects,
            };
        }
        default:
            return state;
    }
};

interface TodoListContextProviderProps {
    children: ReactNode;
}

export const TodoListContextProvider: React.FC<TodoListContextProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    return (
        <TodoListContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoListContext.Provider>
    );
};



// export default { TodoListContext, TodoListContextProvider }