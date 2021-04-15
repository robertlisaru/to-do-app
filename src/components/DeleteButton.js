import DeleteIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Todos from './../todos'
import { useState, useEffect } from 'react'

const DeleteButton = ({ todo, notifyChange }) => {
    const [isPrimed, setIsPrimed] = useState(false)

    const handleClick = () => {
        if (isPrimed) {
            Todos.remove(todo).then(() => notifyChange())
        } else {
            setIsPrimed(true)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsPrimed(false)
        }, 3000)

        return () => clearTimeout(timeout)
    }, [isPrimed])

    return <IconButton
        data-testid={isPrimed ? `pulsing-btn-${todo.id}` : `delete-btn-${todo.id}`}
        onClick={handleClick}
        aria-label="delete"
        className={isPrimed ? 'pulsing-btn' : 'delete-btn'}>
        <DeleteIcon />
    </IconButton>
}

export default DeleteButton
