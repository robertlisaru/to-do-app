import Checkbox from '@material-ui/core/Checkbox'
import DeleteButton from './DeleteButton'
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
                <DeleteButton todo={todo} notifyChange={notifyChange} />
            </div>
        </li>
    )
}

export default Todo
