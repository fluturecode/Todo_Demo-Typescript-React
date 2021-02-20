import React from "react"

interface Props {
	todo: ITodo
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
	return (
		<li>
			<label>
				<input type='checkbox' checked={todo.complete} /> {todo.text}
			</label>
		</li>
	)
}
