import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Todos from './../todos'

const Todo = ({ todo, notifyChange }) => {
    return (
        <li>
            <div className='todo-flex-container'>
                <Checkbox
                    className='todo-checkbox'
                    inputProps={{ 'data-testid': 'todo-checkbox' }}
                    checked={todo.completed}
                    onChange={(event) => {
                        Todos.update(todo,
                            {
                                "completed": event.target.checked
                            }).then(() => notifyChange())
                    }}
                />
                <div className='todo-label'
                    data-testid="todo-label">
                    {todo.completed ? <s>{todo.title}</s> : todo.title}
                </div>
                <IconButton
                    data-testid={`todo-delete-btn-${todo.id}`}
                    onClick={() => { Todos.remove(todo).then(() => notifyChange()) }}
                    aria-label="delete"
                    className='delete-btn'>
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
