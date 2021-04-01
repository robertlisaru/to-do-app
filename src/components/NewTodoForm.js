import PropTypes from 'prop-types'
import { useState } from 'react'
import Todos from './../todos'

const NewTodoForm = ({ notifyChange }) => {
    const [newTodoTitle, setNewTodoTitle] = useState('')

    const createTodo = () => {
        Todos.create({ title: newTodoTitle }).then(() => {
            setNewTodoTitle('')
            notifyChange()
        })
    }

    return (
        <form>
            <label>
                <input
                    data-testid='newTodo'
                    placeholder='What needs to be done'
                    value={newTodoTitle}
                    onChange={(event) => {
                        setNewTodoTitle(event.target.value)
                    }}
                />
            </label>
            <button
                data-testid='addButton'
                type='button'
                onClick={createTodo}>Add
            </button>
        </form>
    )
}

NewTodoForm.propTypes = {
    notifyChange: PropTypes.func
}

export default NewTodoForm
