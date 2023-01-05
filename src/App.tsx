import { Container, Typography } from '@mui/material'
import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'
import CompletedToDosCounter from './components/CompletedToDosCounter'
import { useQuery } from 'react-query'
import { getTodos } from './store'
import { IToDo } from './interfaces/Todo'
import { useMemo } from 'react'

function App() {
    const { data: todos } = useQuery<IToDo[]>('todos', getTodos, {
        initialData: [],
    })
    const totalCompletedTodos = useMemo(
        () => todos?.filter((todo) => todo.completed).length || 0,
        [todos]
    )

    return (
        <Container maxWidth="xs">
            <Typography style={{ textAlign: 'center' }} variant="h3">
                Redux List App
            </Typography>
            <AddToDo />
            {todos && <ToDoList todos={todos} />}
            <CompletedToDosCounter totalCompletedTodos={totalCompletedTodos} />
        </Container>
    )
}

export default App
