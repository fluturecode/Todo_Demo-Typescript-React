import React, { useState } from "react"
import { AddTodoForm } from "./components/AddTodoForm"
import { TodoList } from "./components/TodoList"

const initialTodos: Array<Todo> = [
	{
		text: "Learn Typescript",
		complete: true,
	},
	{
		text: "Write a React Boilerplate",
		complete: false,
	},
]

const App: React.FC = () => {
	const [todos, setTodos] = useState(initialTodos)

	const toggleTodo: ToggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				}
			}
			return todo
		})
		setTodos(newTodos)
	}

	const addTodo: AddTodo = (newTodo) => {
		setTodos([...todos, { text: newTodo, complete: false }])
	}

	return (
		<>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<AddTodoForm addTodo={addTodo} />
		</>
	)
}

export default App
