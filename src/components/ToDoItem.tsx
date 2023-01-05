import { FC, useCallback } from 'react'
import { IToDo } from '../interfaces/Todo'
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Checkbox,
    IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteTodo, queryClient, toggleTodoStatus } from '../store'
import { useMutation } from 'react-query'

interface IToDoItemProps extends IToDo {}

const ToDoItem: FC<IToDoItemProps> = ({ id, completed, title }) => {
    const deleteMutation = useMutation(deleteTodo, {
        onSuccess: () => queryClient.invalidateQueries('todos'),
    })

    const toggleMutation = useMutation(toggleTodoStatus, {
        onSuccess: () => queryClient.invalidateQueries('todos'),
    })

    const handleChangeStatus = useCallback(() => {
        toggleMutation.mutate({ id, title, completed: !completed })
    }, [id, completed, title, toggleMutation])

    const handleDelete = useCallback(() => {
        deleteMutation.mutate(id)
    }, [id, deleteMutation])

    return (
        <ListItem key={id}>
            <ListItemText
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                }}
            >
                {title}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <Checkbox
                    edge="start"
                    value={completed}
                    onChange={handleChangeStatus}
                    checked={completed}
                />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ToDoItem
