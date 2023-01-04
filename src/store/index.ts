import { QueryCache, QueryClient } from 'react-query'
import { IToDo } from '../interfaces/Todo'
import { v4 as uuidv4 } from 'uuid'

const queryClient = new QueryClient()

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

function addTodo(title: string): IToDo[] {
    return [
        ...todos,
        {
            id: uuidv4(),
            title,
            completed: false,
        },
    ]
}

export const getTodos2 = async (): Promise<IToDo[]> => fetch('BASE_URL').then((res) => res.json())
export { getTodos, addTodo, queryClient }
