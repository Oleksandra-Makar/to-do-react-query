import { QueryClient } from 'react-query'
import { IToDo } from '../interfaces/Todo'

const queryClient = new QueryClient()
export const BASE_URL = 'http://localhost:4000/todos'

const todos: IToDo[] = [
    {
        id: '1',
        title: 'Task',
        completed: true,
    },
    {
        id: '2',
        title: 'Task2',
        completed: true,
    },
]

const getTodos = (): IToDo[] => {
    return todos
}

const createTodo = async (text: string): Promise<IToDo> =>
    fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text,
        }),
    }).then((res) => res.json())

export { getTodos, queryClient, createTodo }
