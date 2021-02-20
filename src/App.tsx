import React from "react";
import { TodoListItem } from "./components/Todo.ListItem";

const todos: ITodo:[] = [
	{
		text: "Learn Typescript",
		complete: false,
	},
	{
		text: "Write a React Boilerplate",
		complete: true,
	},
]

function App() {
	return (
		<ul>
			<TodoListItem todo={todos[0]} />
			<TodoListItem todo={todos[1]} />
		</ul>
	)
}

export default App
