import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import Todos from './../todos'

const Todo = ({ todo, notifyChange }) => {
    return (
        <li>
            <Checkbox
                inputProps={{ 'data-test': 'todo' }}
                checked={todo.completed}
                onChange={(event) => {
                    Todos.update(todo,
                        {
                            "completed": event.target.checked
                        }).then(() => notifyChange())
                }}
            />
            <div data-test="todoLabel">{todo.completed ? <s>{todo.title}</s> : todo.title}</div>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object,
    notifyChange: PropTypes.func
}

export default Todo
