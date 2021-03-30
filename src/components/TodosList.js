import PropTypes from 'prop-types'
import Todo from './Todo'

const TodosList = ({ todos }) => {

    return <div className='TodosListWrapper'>
        <ul>
            {todos.map((todo) =>
                <Todo key={todo.id} todo={todo} />)}
        </ul>
    </div>
}

TodosList.propTypes = {
    todos: PropTypes.array,
}

export default TodosList
