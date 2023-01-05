import { QueryClient } from 'react-query'
import { IToDo } from '../interfaces/Todo'
import { v4 as uuidv4 } from 'uuid'

const queryClient = new QueryClient()
export const BASE_URL = 'http://localhost:4000/todos'

const getTodos = async (): Promise<IToDo[]> => fetch(BASE_URL).then((res) => res.json())

const createTodo = async (title: string): Promise<IToDo> =>
    fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: uuidv4(),
            title: title,
            completed: false,
        }),
    }).then((res) => res.json())

const deleteTodo = async (id: string): Promise<string> =>
    fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    }).then(() => id)

const toggleTodoStatus = async (todo: IToDo): Promise<IToDo> =>
    fetch(`${BASE_URL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    }).then((res) => res.json())

export { queryClient, createTodo, toggleTodoStatus, deleteTodo, getTodos }
