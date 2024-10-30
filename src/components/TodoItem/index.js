// Write your code here

const TodoItem = props => {
  const {tododetails, deletetodo} = props
  const {id, title} = tododetails
  const ondeletetodo = () => {
    deletetodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={ondeletetodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

