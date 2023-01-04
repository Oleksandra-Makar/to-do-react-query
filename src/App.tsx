import { Container, Typography } from '@mui/material'
import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'
import CompletedToDosCounter from './components/CompletedToDosCounter'
import { useQuery } from 'react-query'
import { getTodos } from './store'
import { IToDo } from './interfaces/Todo'

function App() {
    const { data: todos } = useQuery<IToDo[]>('todos', getTodos, {
        initialData: [],
    })

    return (
        <Container maxWidth="xs">
            <Typography style={{ textAlign: 'center' }} variant="h3">
                Redux List App
            </Typography>
            <AddToDo />
            <ToDoList todos={todos} />
            <CompletedToDosCounter />
        </Container>
    )
}

export default App
