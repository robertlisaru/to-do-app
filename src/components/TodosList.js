import Todo from './Todo'

const TodosList = ({ todos, notifyChange }) => {

    return <div className='todos-list-wrapper'>
        <ul>
            {todos.map((todo) =>
                <Todo key={todo.id} todo={todo} notifyChange={notifyChange} />)}
        </ul>
    </div>
}

export default TodosList
