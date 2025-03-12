export interface Todo {
    title: string;
    // desc?: string;
    //time?: string;
}

export interface Project {
    title: string;
    todos: Todo[];
}

export interface ProjectList{
    title: string;
    todos: Todo[];
}

export interface ProjectsListProp {
    projectsList: Project[];
}