import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'

const Todo = ({ todo }) => {
    return (
        <li>
            <Checkbox
                checked={todo.completed}
            />
            {todo.completed ? <s>{todo.title}</s> : todo.title}
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object
}

export default Todo
