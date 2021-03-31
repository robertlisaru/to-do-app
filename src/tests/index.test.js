import App from '../App.js'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

jest.mock("../todos", () => {
    return {
        getAll: () => {
            return Promise.resolve([
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
                }
            ])
        }
    }

})

let container = null
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it("should render all todos", () => {
    act(() => {
        render(
            <App />,
            container
        )
    })

    expect(
        container.querySelectorAll("[data-test='todo']").length
    ).toEqual(3)

})