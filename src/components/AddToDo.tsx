import { FormEvent, useCallback, useState } from 'react'
import { Button, TextField } from '@mui/material'

const AddToDo = () => {
    const [title, setTitle] = useState<string>('')

    const handleSubmit = useCallback(
        (event: FormEvent<EventTarget>) => {
            event.preventDefault()
            if (title) {
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
