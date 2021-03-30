import axios from 'axios'

const TODOS_LIST_URL = "https://todo-backend-hanami.herokuapp.com/"

function getAll() {
    return axios.get(TODOS_LIST_URL, {
        headers: {
            'Accept': 'application/json',
        }
    })
}

function create(todo) {
    return axios.post(TODOS_LIST_URL, todo, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

function update(oldTodo, newTodo) {
    return axios.patch(oldTodo.url, newTodo, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}


export default { getAll, create, update }
