import { useState } from 'react'
import Todos from '../todos'

const Header = ({ notifyChange }) => {
    const [newTodoTitle, setNewTodoTitle] = useState('')

    const createTodo = () => {
        Todos.create({ title: newTodoTitle }).then(() => {
            setNewTodoTitle('')
            notifyChange()
        })
    }

    return (
        <header className='header'>
            <h1>Todos</h1>
            <input
                data-testid='new-todo-input'
                placeholder='What needs to be done'
                value={newTodoTitle}
                onChange={(event) => {
                    setNewTodoTitle(event.target.value)
                }}
            />
            <span
                className='add-btn'
                data-testid='add-btn'
                onClick={createTodo}>
                Add
            </span>
        </header>
    )
}

export default Header
