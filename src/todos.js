import axios from 'axios'

const TODOS_LIST_URL = "https://todo-backend-hanami.herokuapp.com/"

function getAll() {

    return axios.get(TODOS_LIST_URL, {
        headers: {
            Accept: 'application/json',
        }
    })
}

export default { getAll }
