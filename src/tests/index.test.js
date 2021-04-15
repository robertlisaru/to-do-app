import App from '../App.js'
import Todos from '../todos'
import '@testing-library/jest-dom/extend-expect'
import { waitFor, render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'

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
    Todos.remove.mockImplementation((todo) => {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === todo.id) {
                todos.splice(i, 1)
            }
        }
        return Promise.resolve({})
    })
})

test("should render all todos", async () => {
    render(<App />)

    expect((await screen.findAllByTestId('todo-label')).length).toEqual(4)
})

test("should create new todo", async () => {
    render(<App />)

    fireEvent.change(await screen.findByTestId('new-todo-input'), { target: { value: 'meet Bob' } })
    fireEvent.click(screen.getByTestId('add-btn'))

    await waitFor(() => {
        expect(screen.getAllByTestId('todo-label').length).toEqual(5)
    })
    expect(screen.getAllByTestId('todo-label')[4]).toHaveTextContent('meet Bob')
    expect(screen.getByTestId('new-todo-input')).toHaveValue('')
})

test("should not delete todo with single click", async () => {
    render(<App />)

    await waitFor(() => {
        expect(screen.getAllByTestId('todo-label').length).toEqual(4)
    })
    expect(screen.getAllByTestId('todo-label')[1]).toHaveTextContent('adjust moon orbit')
    fireEvent.click(screen.getByTestId('delete-btn-2'))
    expect(screen.getAllByTestId('todo-label').length).toEqual(4)
    expect(screen.getAllByTestId('todo-label')[1]).toHaveTextContent('adjust moon orbit')
})

test("should delete todo with second click", async () => {
    render(<App />)

    await waitFor(() => {
        expect(screen.getAllByTestId('todo-label').length).toEqual(4)
    })
    expect(screen.getAllByTestId('todo-label')[1]).toHaveTextContent('adjust moon orbit')
    fireEvent.click(screen.getByTestId('delete-btn-2'))

    await screen.findByTestId('pulsing-btn-2')
    fireEvent.click(screen.getByTestId('pulsing-btn-2'))

    await waitForElementToBeRemoved(screen.getByTestId('pulsing-btn-2'))
    expect(screen.getAllByTestId('todo-label').length).toEqual(3)
    expect(screen.getAllByTestId('todo-label')[1]).toHaveTextContent('sleep')
})
