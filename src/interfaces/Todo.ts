export interface IToDo {
    id: string
    title: string
    completed: boolean
}

export interface IStore {
    todos: IToDo[]
    newTodoTitle: string
}
