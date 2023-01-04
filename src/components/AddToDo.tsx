import { FormEvent, useCallback, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { getTodos, addTodo, queryClient } from '../store'
import { QueryCache, QueryClient, useMutation, useQuery } from 'react-query'
import { IToDo } from '../interfaces/Todo'

const AddToDo = () => {
    const [title, setTitle] = useState<string>('')

    /* const { isLoading, error, data } = useQuery('todos', getTodos)
    const { data: todos } = useQuery<IToDo[]>('todos', getTodos, {
        initialData: [],
    })
    // Mutations
    const addTodoItem = useMutation(addTodo, {
        onSuccess: () => queryClient.invalidateQueries('todos'),
    })*/

    const createMutation = useMutation(addTodo(title), {
        onSuccess: () => queryClient.invalidateQueries('todos'),
    })

    const handleSubmit = useCallback(
        (event: FormEvent<EventTarget>) => {
            event.preventDefault()
            if (title) {
                // @ts-ignore
                createMutation.mutate(title)
                console.log(title)
                setTitle('')
            }
        },
        [title]
    )
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                label="To Do Item"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
                Add Item
            </Button>
        </form>
    )
}

export default AddToDo
