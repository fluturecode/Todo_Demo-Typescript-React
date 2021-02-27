import React from "react"
import { TodoListItem } from "./components/Todo.ListItem"

type Todo = {
	text: string
	complete: boolean
}

const todos: Array<Todo> = [
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
	return (
		<ul>
			<TodoListItem todo={todos[0]} />
			<TodoListItem todo={todos[1]} />
		</ul>
	)
}

export default App
