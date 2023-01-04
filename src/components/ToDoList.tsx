import { List } from '@mui/material'
import ToDoItem from './ToDoItem'
import { IToDo } from '../interfaces/Todo'
import { FC } from 'react'

interface IToDoListProps {
    todos?: IToDo[]
}

const ToDoList: FC<IToDoListProps> = ({ todos }) => {
    /*const todos: IToDo[] = [
        {
            id: '1',
            title: 'Task',
            completed: true,
        },
    ]*/
    return (
        <List>
            {todos!.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                />
            ))}
        </List>
    )
}

export default ToDoList
