import PropTypes from 'prop-types'
import Todo from './Todo'

const TodosList = ({ todos, isFetching }) => {

    return isFetching ? TodosFetchingMessage() :
        (<div className='TodosListWrapper'>
            <ul>
                {todos.map((todo) =>
                    <Todo key={todo.id} todo={todo} />)}
            </ul>
        </div>)
}

const TodosFetchingMessage = () => {
    return <p>Fetching todos...</p>
}

TodosList.propTypes = {
    todos: PropTypes.array,
    isFetching: PropTypes.bool
}

export default TodosList
