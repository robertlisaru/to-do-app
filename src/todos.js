import axios from 'axios'

const TODOS_URL = "https://todo-backend-hanami.herokuapp.com/"

const REQUEST_CONFIG = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

function getAll() {
    return axios.get(TODOS_URL, REQUEST_CONFIG)
}

function create(todo) {
    return axios.post(TODOS_URL, todo, REQUEST_CONFIG)
}

function update(oldTodo, newTodo) {
    return axios.patch(oldTodo.url, newTodo, REQUEST_CONFIG)
}

function remove(todo) {
    return axios.delete(todo.url, REQUEST_CONFIG)
}

export default { getAll, create, update, remove }
