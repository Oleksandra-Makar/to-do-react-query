import { Typography } from '@mui/material'
import { useTodosCount } from '../store'
//import { useCompletedTodosCount } from '../store'

const CompletedToDosCounter = () => {
    const comp = useTodosCount()
    return (
        <Typography style={{ textAlign: 'center' }} variant="h4">
            Total completed to-dos: {2}
        </Typography>
    )
}

export default CompletedToDosCounter
