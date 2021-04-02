import PropTypes from 'prop-types'
import Todo from './Todo'

const TodosList = ({ todos, notifyChange }) => {

    return <div className='todosListWrapper'>
        <ul>
            {todos.map((todo) =>
                <Todo key={todo.id} todo={todo} notifyChange={notifyChange} />)}
        </ul>
    </div>
}

TodosList.propTypes = {
    todos: PropTypes.array,
    notifyChange: PropTypes.func
}

export default TodosList
