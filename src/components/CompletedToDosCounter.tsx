import { Typography } from '@mui/material'
import { FC } from 'react'

interface ICompletedToDosCounterProps {
    totalCompletedTodos: number
}

const CompletedToDosCounter: FC<ICompletedToDosCounterProps> = ({ totalCompletedTodos }) => {
    return (
        <Typography style={{ textAlign: 'center' }} variant="h4">
            Total completed to-dos: {totalCompletedTodos}
        </Typography>
    )
}

export default CompletedToDosCounter
