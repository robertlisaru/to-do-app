import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import Todos from './../todos'
import { useState, Fragment } from 'react'

const DeleteButton = ({ todo, notifyChange }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const handleClick = () => {
        if (snackbarOpen) {
            Todos.remove(todo).then(() => notifyChange())
        } else {
            setSnackbarOpen(true)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackbarOpen(false)
    }

    return <>
        <IconButton
            data-testid={`todo-delete-btn-${todo.id}`}
            onClick={handleClick}
            aria-label="delete"
            className='delete-btn'>
            <DeleteIcon />
        </IconButton>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            message='Tap again to delete'
            action={
                <Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Fragment>
            }
        />
    </>
}

DeleteButton.propTypes = {
    todo: PropTypes.object,
    notifyChange: PropTypes.func
}

export default DeleteButton
