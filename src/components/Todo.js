import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Todos from './../todos'

const Todo = ({ todo, notifyChange }) => {
    return (
        <li>
            <div className='todoFlexContainer'>
                <Checkbox
                    className='todoCheckbox'
                    inputProps={{ 'data-testid': 'todoCheckbox' }}
                    checked={todo.completed}
                    onChange={(event) => {
                        Todos.update(todo,
                            {
                                "completed": event.target.checked
                            }).then(() => notifyChange())
                    }}
                />
                <div className='todoLabel'
                    data-testid="todoLabel">
                    {todo.completed ? <s>{todo.title}</s> : todo.title}
                </div>
                <IconButton
                    data-testid={`todoDeleteButton${todo.id}`}
                    onClick={() => { Todos.remove(todo).then(() => notifyChange()) }}
                    aria-label="delete"
                    className='deleteButton'>
                    <DeleteIcon />
                </IconButton>
            </div>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object,
    notifyChange: PropTypes.func
}

export default Todo
