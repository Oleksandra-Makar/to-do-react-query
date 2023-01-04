import { FormEvent, useCallback, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { queryClient, createTodo } from '../store'
import { useMutation } from 'react-query'

const AddToDo = () => {
    const [title, setTitle] = useState<string>('')

    const createMutation = useMutation(createTodo, {
        onSuccess: () => queryClient.invalidateQueries('todos'),
    })

    const handleSubmit = useCallback(
        (event: FormEvent<EventTarget>) => {
            event.preventDefault()
            if (title) {
                createMutation.mutate(title)
                setTitle('')
            }
        },
        [title, createMutation]
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
