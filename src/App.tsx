import React, { useState } from "react"
import { TodoListItem } from "./components/Todo.ListItem"

type Todo = {
	text: string
	complete: ToggleTodo
}

const initialTodos: Array<Todo> = [
	{
		text: "Learn Typescript",
		complete: false,
	},
	{
		text: "Write a React Boilerplate",
		complete: true,
	},
]

const App: React.FC = () => {
	const [todos, setTodos] = useState(initialTodos)

	const toggleTodo = (ToggleTodo = (selectedTodo) => {
		const newTodos: Array<Todo> = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				}
			}
			return todo
		})
		setTodos(newTodos)
	})

	return (
		<>
			<TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
			<TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
		</>
	)
}

export default App
