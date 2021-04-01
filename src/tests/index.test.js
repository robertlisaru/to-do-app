import App from '../App.js'
import Todos from '../todos'
import '@testing-library/jest-dom/extend-expect'
import { waitFor, render, screen, fireEvent } from '@testing-library/react'

let todos = []

jest.mock('../todos')

beforeEach(() => {
    todos = [
        {
            "id": 1,
            "title": "buy milk",
            "completed": false,
            "order": 0,
            "url": "https://todo-backend-hanami.herokuapp.com/todos/1"
        },
        {
            "id": 2,
            "title": "adjust moon orbit",
            "completed": false,
            "order": 0,
            "url": "https://todo-backend-hanami.herokuapp.com/todos/2"
        },
        {
            "id": 3,
            "title": "sleep",
            "completed": false,
            "order": 0,
            "url": "https://todo-backend-hanami.herokuapp.com/todos/3"
        },
        {
            "id": 4,
            "title": "rest",
            "completed": true,
            "order": 0,
            "url": "https://todo-backend-hanami.herokuapp.com/todos/4"
        }
    ]

    const resp = { data: todos }
    Todos.getAll.mockImplementation(() => Promise.resolve(resp))
    Todos.create.mockImplementation((todo) => {
        const newTodo = {
            "id": 5,
            "title": todo.title,
            "completed": false,
            "order": 0,
            "url": "https://todo-backend-hanami.herokuapp.com/todos/5"
        }
        todos.push(newTodo)
        return Promise.resolve({
            data: newTodo
        })
    })
})

test("should render all todos", async () => {
    render(<App />)

    expect((await screen.findAllByTestId('todoLabel')).length).toEqual(4)
})

test("should create new todo", async () => {
    render(<App />)

    fireEvent.change(await screen.findByTestId('newTodoInput'), { target: { value: 'meet Bob' } })
    fireEvent.click(screen.getByTestId('addButton'))

    await waitFor(() => {
        expect(screen.getAllByTestId('todoLabel').length).toEqual(5)
    })

    expect(screen.getAllByTestId('todoLabel')[4]).toHaveTextContent('meet Bob')
    expect(screen.getByTestId('newTodoInput')).toHaveValue('')
})
