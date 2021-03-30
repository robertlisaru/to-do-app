import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Todos from './../todos'

const Todo = ({ todo }) => {
    return (
        <li>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={todo.completed}
                        onChange={(event) => {
                            Todos.update(todo,
                                {
                                    "completed": event.target.checked
                                })
                        }}
                    />
                }
                label={todo.completed ? <s>{todo.title}</s> : todo.title}
            />
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object
}

export default Todo
