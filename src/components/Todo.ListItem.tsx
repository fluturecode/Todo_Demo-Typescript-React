import React from "react"

interface ITodo {
	text: string
	complete: boolean
}

interface Props {
	todo: ITodo
}

export const TodoListItem: React.FC<Props> = (props) => {
	return <li>A list item</li>
}
