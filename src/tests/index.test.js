import App from '../App.js'
import { render, unmountComponentAtNode } from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'
import Todos from '../todos'

let todos = []

jest.mock('../todos')

let container = null
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)

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

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it("should render all todos", async () => {
    await act(async () => {
        render(<App />, container)
    })

    expect(container.querySelectorAll("[data-test='todo']").length).toEqual(4)
})

it("should create new todo", async () => {
    await act(async () => {
        render(<App />, container)
    })

    await act(async () => {
        const input = container.querySelector("[data-test='newTodo']")
        input.value = 'meet Bob'
        Simulate.change(input)
    })

    await act(async () => {
        const addButton = container.querySelector("[data-test='addButton']")
        Simulate.click(addButton)
    })

    expect(container.querySelectorAll("[data-test='todo']").length).toEqual(5)
    expect(container.querySelectorAll("[data-test='todoLabel']")[4].textContent).toEqual('meet Bob')
    expect(container.querySelector("[data-test='newTodo']").value).toEqual('')
})
