import { useState, useEffect } from 'react'
import axios from 'axios'

const TODOS_LIST_URL = "https://todo-backend-hanami.herokuapp.com/"

const useTodosList = () => {
    const [data, setData] = useState({ todos: [], isFetching: false })

    const fetchTodos = async () => {
        try {
            setData({ todos: data.todos, isFetching: true })
            const response = await axios.get(TODOS_LIST_URL, {
                headers: {
                    Accept: 'application/json',
                }
            })
            setData({ todos: response.data, isFetching: false })
        } catch (e) {
            console.log(e)
            setData({ todos: data.todos, isFetching: false })
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return data
}

export default useTodosList
